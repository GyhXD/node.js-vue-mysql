/*
 * @Author: your name
 * @Date: 2020-07-08 11:20:56
 * @LastEditTime: 2020-07-08 13:26:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\config\dev.env.js
 */
'use strict'
const merge = require('webpack-merge') // merge 合并两个配置文件对象并生成一个新的配置文件
const prodEnv = require('./prod.env') // ./prod.env.js 配置文件

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"', // 开发环境  :一定要双引号
  API_ROOT: '"https://oss.ispacechina.com/api"' // 在 main.js 中使用 process.env.API_ROOT 获取值
})