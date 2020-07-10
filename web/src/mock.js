/*
 * @Author: your name
 * @Date: 2020-07-08 09:39:32
 * @LastEditTime: 2020-07-08 14:37:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\mock\index.js
 */
import Mock from 'mockjs'
const Random = Mock.Random
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = function () {
  let newsList = []
  for (let i = 0; i < 20; i++) {
    let newNewsObject = {
      title: Random.ctitle(), // Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
    }
    newsList.push(newNewsObject)
  }
  return newList
}
// 请求该url，就可以返回newsList
const data = Mock.mock('uaa/v1/oauth/captchaImage', 'get', produceNewsData)
export default data