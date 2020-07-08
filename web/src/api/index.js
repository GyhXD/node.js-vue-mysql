/*
 * @Author: your name
 * @Date: 2020-07-08 09:43:37
 * @LastEditTime: 2020-07-08 09:44:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\api\index.js
 */
import request from '@/utils/request'
export function getCaptcha() {
  return request({
    url: 'uaa/v1/oauth/captchaImage',
    method: 'get'
  })
}