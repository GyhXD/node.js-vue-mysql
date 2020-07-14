/*
 * @Author: your name
 * @Date: 2020-07-14 10:22:38
 * @LastEditTime: 2020-07-14 11:19:46
 * @LastEditors: Please set LastEditors
 * @Description: 文档https://segmentfault.com/a/1190000011795931?utm_source=tag-newest
 * @FilePath: \web\build\webpack.dll.config.js
 */
const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: {
    vendor: ['element-ui', 'vuex', 'axios', 'vue-router']
  },
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'dll_[name].js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../', "[name]-manifest.json"),
      name: "[name]_[hash]"
    })
  ]
}