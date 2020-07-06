/*
 * @Author: your name
 * @Date: 2020-07-01 09:48:25
 * @LastEditTime: 2020-07-06 09:58:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})