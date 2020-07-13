/*
 * @Author: your name
 * @Date: 2020-07-06 10:58:46
 * @LastEditTime: 2020-07-13 09:23:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\utils\request.js
 */
import axios from 'axios'
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
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)
export default service