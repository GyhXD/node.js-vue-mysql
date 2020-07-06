/*
 * @Author: your name
 * @Date: 2020-07-06 11:29:19
 * @LastEditTime: 2020-07-06 11:29:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    name: 'helloVueX'
  }
})

export default store