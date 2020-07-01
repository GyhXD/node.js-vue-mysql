/*
 * @Author: your name
 * @Date: 2020-07-01 11:22:59
 * @LastEditTime: 2020-07-01 11:28:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\webpack.prod.js
 */
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ],
  devtool: '#source-map',
});