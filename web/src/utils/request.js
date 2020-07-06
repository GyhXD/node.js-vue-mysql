/*
 * @Author: your name
 * @Date: 2020-07-06 10:58:46
 * @LastEditTime: 2020-07-06 11:19:30
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
  baseURL: process.env.BASE_API,
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