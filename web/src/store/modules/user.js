/*
 * @Author: your name
 * @Date: 2020-07-08 09:03:13
 * @LastEditTime: 2020-07-08 09:06:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\store\modules\user.js
 */
const state = {
  userInfo: {}
}
const mutations = {
  SET_USERINFO: (state, data) => {
    state.userInfo = data
  }
}
const actions = {
  setuser({
    commit
  }, userInfo) {
    commit('SET_USERINFO', userInfo)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}