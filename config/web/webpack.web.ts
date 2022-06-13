/**
 * 公共的配置
 */
import path from 'path'
import { Configuration, DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'

const packages = require('../../package.json')

export const ConfigInit = (mode: "development" | "production"):Configuration => {
  const isPro:boolean = mode === 'production'
  // 样式的数组的
  const cssLoaderAry:string[] = [
    isPro ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'postcss-loader'
  ]
  return {
    target: 'web',
    mode,
    entry: path.resolve(__dirname, '../../src/index.tsx'),
    output: {
      filename: isPro ? 'js/[name].[chunkhash:8].js' : '[name].[hash:8].js',
      path: path.resolve(__dirname, '../../dist')
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: isPro ? 'css/[name].[contenthash:8].css' : 'css/[name].css' }),
      new ESLintPlugin({
        extensions: ['ts', 'tsx', 'js'],
        formatter: require('eslint-friendly-formatter')
      }),
      new HtmlWebpackPlugin({
        title: '项目',
        filename: 'index.html',
        template: path.resolve(__dirname, './index.ejs'),
        hash: true,
        cache: false,
        inject: true,
        minify: {
          removeComments: true,
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
          minifyCSS: true // 缩小CSS样式元素和样式属性
        },
        nodeModules: path.resolve(__dirname, '../../node_modules')
      }),
      new DefinePlugin({
        'process.env': {
          tag: JSON.stringify(process.env.tag),
          version: JSON.stringify(packages.version)
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/images/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/fonts/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: cssLoaderAry
        },
        {
          test: /\.less$/i,
          use: [
            ...cssLoaderAry,
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  exclude: /node_modules/,
                  // modifyVars: theme, // 自定义主题的
                  javascriptEnabled: true
                }
              }
            }
          ]
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'thread-loader',
              options: {
                workers: 2,
                workerParallelJobs: 50
              }
            },
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../../src/assets'),
      },
      extensions: ['.tsx', '.js', '.ts', '.less', '.css']
    }
  }
}
