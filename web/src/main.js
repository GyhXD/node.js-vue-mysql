/*
 * @Author: your name
 * @Date: 2020-07-01 09:48:25
 * @LastEditTime: 2020-07-08 14:03:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
require('./mock.js')
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: {
    App
  }
})