/*
 * @Author: your name
 * @Date: 2020-07-01 09:48:25
 * @LastEditTime: 2020-07-20 11:20:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
const {
  mockXHR
} = require('../mock')
mockXHR()
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})