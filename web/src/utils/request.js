/*
 * @Author: your name
 * @Date: 2020-07-06 10:58:46
 * @LastEditTime: 2020-07-08 13:19:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\utils\request.js
 */
import axios from 'axios'
import {
  Message
} from 'element-ui'
import router from '../router'
const service = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 30000
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
export default service