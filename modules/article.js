/*
 * @Author: your name
 * @Date: 2020-05-11 13:12:03
 * @LastEditTime: 2020-05-20 16:12:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa\modules\article.js
 */
const db = require('../config/db');
const Sequelize = db.sequelize;
console.log('xxxxx', db.sequelize.query)
const Article = Sequelize.import('../schema/article');
Article.sync({
  force: false
})
class ArticleModle {
  // 新增文章model
  static async createArticle(data) {
    return await Article.create({
      title: data.title,
      author: data.author,
      content: data.content,
      category: data.category
    })
  }
  // 查询文章详情数据
  static async getArticleDetail(id) {
    console.log('Sequelize', Sequelize.query)
    return await Article.findOne({
      where: {
        id
      }
    })
  }
  static async findOne(id) {
    return await Sequelize.query(`SELECT id FROM article`, {
      model: Article,
      mapToModel: true
    }).then(res => {
      // console.log(res)
      return res[1]
    })
  }
}
module.exports = ArticleModle;