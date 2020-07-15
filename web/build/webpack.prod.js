/*
 * @Author: your name
 * @Date: 2020-07-01 11:22:59
 * @LastEditTime: 2020-07-15 08:39:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\webpack.prod.js
 */
const merge = require('webpack-merge');
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const config = require('../config');
// console.log('====config', config)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  // 生成的html的文件名
  filename: `index.html`,
  // 引用的模板
  template: './build/index.html',
  // 注入bundle到body中
  inject: true
});
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory
      }]
    })
  ].concat(htmlPlugin),
  devtool: '#source-map',
});