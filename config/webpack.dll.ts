import path from 'path'
import webpack, { Configuration, DllPlugin } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export const WebpackDllConfig:Configuration = {
  target: 'web',
  mode: 'production',
  entry: {
    react: 'react',
    reactdom: 'react-dom',
    reactrouterdom: 'react-router-dom'
  },
  output: {
    path: path.resolve(__dirname, 'dll'),
    publicPath: './',
    filename: '[name].js',
    library: '[name]_library'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DllPlugin({
      path: path.join(__dirname, 'dll', '[name].manifest.json'),
      name: '[name]_library'
    })
  ]
} 

webpack(WebpackDllConfig, (err:any, state:any) => {
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