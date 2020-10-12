/*
 * @Author: your name
 * @Date: 2020-07-01 09:51:06
 * @LastEditTime: 2020-08-04 13:46:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\webpack.config.js
 */
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const manifest = require('../vendor-manifest.json')
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const resolve = function (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'static/js/bundle.[hash].js',
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader', {
          loader: 'html-minify-loader',
          options: {
            comments: false
          }
        }] // 处理顺序 html-minify-loader => html-loader => webpack
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolveLoader: {
    // 因为 html-loader 是开源 npm 包，所以这里要添加 'node_modules' 目录
    modules: [path.join(__dirname, '../src/loaders'), 'node_modules']
  },
  plugins: [
    // new ExtractTextPlugin('static/css/style.[hash].css'),
    new FriendlyErrorsWebpackPlugin(),
    // 抽离公共的模块
    new webpack.DllReferencePlugin({
      manifest
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '~': resolve('build')
    }
  },
};