/*
 * @Author: your name
 * @Date: 2020-07-08 10:31:10
 * @LastEditTime: 2020-07-17 16:15:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\config\index.js
 */
'use strict'
const path = require('path')
const MODULE = process.env.MODULE_ENV || 'undefined'
// 入口模板路径
const htmlTemplate = `./build/index.html`;
module.exports = {
  dev: {
    env: require('./dev.env'),
    assetsSubDirectory: 'static', // ddx-静态资源文件夹
    assetsPublicPath: '/', // ddx-发布路径
    host: 'localhost',
    port: '8080',
    autoOpenBrowser: true,
    errorOverlay: true, // ddx-查询错误
    notifyOnErrors: true, // ddx-通知错误
    devtool: 'cheap-module-eval-source-map', //  ddx-webpack提供的用来方便调试的配置，它有四种模式，可以查看webpack文档了解更多
    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true, // ddx-一个配合devtool的配置，当给文件名插入新的hash导致清楚缓存时是否生成souce maps，默认在开发环境下为true
    cssSourceMap: true // ddx-是否开启cssSourceMap
  },
  build: {
    // 导入prod.env.js配置文件，用来指明编译环境 生产环境
    env: require('./prod.env'),

    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'), // ddx-编译后index.html的路径, __dirname->index.js所在的绝对路径

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), // ddx-打包后的文件根路径
    assetsSubDirectory: 'static', // ddx-静态资源文件夹
    assetsPublicPath: './', // ddx-发布路径, 部署时改为 ./ , 否则打开index.html文件会报错, 可配置为资源服务器域名或 CDN 域名
    /**
     * Source Maps
     */
    productionSourceMap: true, // ddx- 是否生成生产环境的sourcmap，sourcmap是用来debug编译后文件的，通过映射到编译前文件来实现
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, // ddx- 是否在生产环境中压缩代码，如果要压缩必须安装compression-webpack-plugin
    productionGzipExtensions: ['js', 'css'], // ddx- gzip模式下需要压缩的文件的扩展名，设置后会对相应扩展名的文件进行压缩

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}