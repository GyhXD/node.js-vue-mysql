/*
 * @Author: your name
 * @Date: 2020-07-01 11:20:28
 * @LastEditTime: 2020-07-01 11:28:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\webpack.dev.js
 */
const merge = require('webpack-merge');
const common = require('./webpack.config.js')
module.exports = merge(common, {
  mode: 'development',
  devtool: '#eval-source-map',
  devServer: {
    noInfo: true,
    open: true
  }
})