/*
 * @Author: your name
 * @Date: 2020-07-01 11:22:59
 * @LastEditTime: 2020-07-14 16:42:09
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
console.log('====config', config)
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
  ],
  devtool: '#source-map',
});