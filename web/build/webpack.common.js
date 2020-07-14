/*
 * @Author: your name
 * @Date: 2020-07-01 09:51:06
 * @LastEditTime: 2020-07-14 11:33:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\webpack.config.js
 */
const path = require('path');
const webpack = require('webpack');
const manifest = require('../vendor-manifest.json')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const resolve = function (dir) {
  return path.join(__dirname, '..', dir)
}
// const htmlPlugin = new HtmlWebpackPlugin({
//   // 生成的html的文件名
//   filename: `index.html`,
//   // 引用的模板
//   template: './build/index.html',
//   // 注入bundle到body中
//   inject: 'body'
// });

const config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../dist/')
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
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    // htmlPlugin,
    new ExtractTextPlugin('style.[hash].css'),
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


module.exports = config;