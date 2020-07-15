/*
 * @Author: your name
 * @Date: 2020-07-14 10:22:38
 * @LastEditTime: 2020-07-14 17:18:22
 * @LastEditors: Please set LastEditors
 * @Description: 文档https://segmentfault.com/a/1190000011795931?utm_source=tag-newest
 * @FilePath: \web\build\webpack.dll.config.js
 */
const path = require('path');
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const package = require('../package.json')
let dependencies = Object.keys(package.dependencies) || []

module.exports = {
  entry: {
    // vendor: ['vue', 'element-ui', 'vuex', 'axios', 'vue-router']
    vendor: dependencies
  },
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'dll_[name]_[hash:6].js',
    library: '[name]_[hash:6]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../', "[name]-manifest.json"),
      name: "[name]_[hash:6]"
    }),
    new AssetsPlugin({
      filename: 'bundle-config.js',
      path: './',
      processOutput: (assets) => {
        console.log('====assets', assets)
        return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
      }
    })
  ]
}