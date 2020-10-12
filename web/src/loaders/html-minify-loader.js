/*
 * @Author: your name
 * @Date: 2020-08-04 09:34:01
 * @LastEditTime: 2020-08-04 10:36:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\loaders\html-minify-loader.js
 */
var Minimize = require('minimize');
var loaderUtils = require('loader-utils');

module.exports = function (source) {
  var callback = this.async();
  if (this.cacheable) {
    this.cacheable();
  }
  var opts = loaderUtils.getOptions(this) || {};
  var minimize = new Minimize(opts);
  minimize.parse(source, callback);
};