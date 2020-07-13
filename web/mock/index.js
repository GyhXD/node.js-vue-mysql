/*
 * @Author: your name
 * @Date: 2020-07-08 09:39:32
 * @LastEditTime: 2020-07-13 10:54:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\mock\index.js
 */
const Mock = require('mockjs');
const user = require('./user')
const mocks = [
  ...user
]

function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null
      if (respond instanceof Function) {
        const {
          body,
          type,
          url
        } = options

        result = respond({
          method: type,
          body: JSON.parse(body),
          query: url
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}
module.exports = {
  mocks,
  mockXHR
}