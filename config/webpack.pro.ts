import path from 'path'
import webpack, { Configuration, BannerPlugin, LoaderOptionsPlugin, DllReferencePlugin } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin'
import { merge } from 'webpack-merge'
import { ConfigInit } from './web/webpack.web'

const WebpackDllConfig = require('./webpack.dll').WebpackDllConfig

// 提前打包好的信息 进行引用, 循环遍历设置
const dllKey:string[] = Object.keys(WebpackDllConfig.entry)
const dllPluginsAry:any[] = [] // DllReferencePlugin数组
const AddAssetHtmlPluginAry:any[] = [] // AddAssetHtmlPlugin 插入的数组
for (let index = 0; index < dllKey.length; index++) {
  const key = dllKey[index]
  AddAssetHtmlPluginAry.push({
    filepath: path.resolve(__dirname, `./dll/${key}.js`),
    publicPath: './dll',
    outputPath: 'dll'
  })
  dllPluginsAry.push(new DllReferencePlugin({
    manifest: require(path.join(__dirname, './dll/', `${key}.manifest.json`))
  }))
}

const config:Configuration = merge(ConfigInit('production'), {
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionWebpackPlugin(),
    new LoaderOptionsPlugin({
      minimize: true
    }),
    ...dllPluginsAry,
    // 插入指定的js
    new AddAssetHtmlPlugin(AddAssetHtmlPluginAry),
    new BannerPlugin('版权所有，翻版必究')
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: 'mainifels'
    },
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  performance: {
    hints: false,
    maxAssetSize: 4000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 5000000 // 整数类型（以字节为单位）
  }
})

webpack(config, (err:any, state:any) => {
  if (err) {
    console.log(err.stack || err)
  } else if (state.hasErrors()) {
    let err = ''
    state.toString({
      chunks: false,
      colors: true
    }).split(/\r?\n/).forEach((line:any) => {
      err += `    ${line}\n`
    })
    console.warn(err)
  } else {
    console.log(state.toString({
      chunks: false,
      colors: true
    }))
  }
})