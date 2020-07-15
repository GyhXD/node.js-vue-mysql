/*
 * @Author: your name
 * @Date: 2020-07-01 11:20:28
 * @LastEditTime: 2020-07-14 16:55:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\webpack.dev.js
 */
const merge = require('webpack-merge');
const webpack = require('webpack')
const config = require('../config')
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  // 生成的html的文件名
  filename: `index.html`,
  // 引用的模板
  template: './build/index.html',
  // 注入bundle到body中
  inject: 'body'
});
module.exports = merge(common, {
  mode: 'development',
  devtool: '#eval-source-map',
  devServer: {
    open: config.dev.autoOpenBrowser
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    })
  ].concat(htmlPlugin),
})