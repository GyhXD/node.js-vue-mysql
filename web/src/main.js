/*
 * @Author: your name
 * @Date: 2020-07-01 09:48:25
 * @LastEditTime: 2020-07-01 10:11:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\main.js
 */
import Vue from 'vue';
import App from './App.vue'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)