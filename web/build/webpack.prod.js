/*
 * @Author: your name
 * @Date: 2020-07-01 11:22:59
 * @LastEditTime: 2020-07-22 15:05:25
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
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  // 生成的html的文件名
  filename: `index.html`,
  // 引用的模板
  template: './build/index.html',
  // 注入bundle到body中
  inject: true
});
const AddAssetHtml = new AddAssetHtmlPlugin({
  filepath: path.resolve(__dirname, '../static/dll_vendor.js'),
  outputPath: 'js',
  publicPath: './js'
})
module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css', //抽离的文件名
      allChunks: true,
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../static'),
        to: './'
      }]
    }),
  ].concat(htmlPlugin).concat(AddAssetHtml),
  devtool: '#source-map',
});