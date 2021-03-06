/*
 * @Author: your name
 * @Date: 2020-07-06 11:29:19
 * @LastEditTime: 2020-07-08 14:09:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  modules,
})

export default store