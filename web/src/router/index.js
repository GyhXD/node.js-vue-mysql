/*
 * @Author: your name
 * @Date: 2020-07-01 14:48:47
 * @LastEditTime: 2020-07-01 15:54:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '',
    name: 'login',
    component: () => import('../pages/login/index'),
  }]
})