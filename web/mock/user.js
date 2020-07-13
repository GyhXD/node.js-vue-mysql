/*
 * @Author: your name
 * @Date: 2020-07-13 09:36:26
 * @LastEditTime: 2020-07-13 09:38:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\mock\user.js
 */
module.exports = [{
  url: 'uaa/v1/oauth/captchaImage',
  type: 'get',
  response: config => {
    return {
      code: '200',
      data: {
        username: '111111111'
      }
    }
  }
}]