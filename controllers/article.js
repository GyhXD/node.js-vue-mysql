const ArticleModel = require('../modules/article')
class articleController {
  static async create(ctx) {
    let req = ctx.require.body
    if (req.title && req.author && req.content && req.category) {
      try {
        const ret = await ArticleModel.createArticle(req);
        const data = await ArticleModel.getArticleDetail(ret.id)
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          data: data,
          massage: 'sucssce'
        }

      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          data: error,
          massage: 'faild'
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        data: '',
        massage: 'failed'
      }
    }
  }

  // 获取文章详情
  static async detail(ctx) {
    let id = ctx.params.id
    if (id) {
      try {
        let data = await ArticleModel.getArticleDetail(id)
        ctx.response.status = 200;
        ctx.body = {
          code: '200',
          msg: '查询成功',
          data
        };
      } catch (error) {
        ctx.response.status = 412
        ctx.body = {
          code: 200,
          massage: '查询失败',
          data: error
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 200,
        message: '参数不全'
      }
    }

  }

  // 获取文章详情
  static async findOne(ctx) {
    let id = ctx.params.id
    if (id) {
      try {
        let data = await ArticleModel.findOne(id)
        console.log('data', data)
        ctx.response.status = 200;
        ctx.body = {
          code: '200',
          msg: '查询成功',
          data
        };
      } catch (error) {
        ctx.response.status = 412
        ctx.body = {
          code: 200,
          massage: '查询失败',
          data: error
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 200,
        message: '参数不全'
      }
    }

  }
}
module.exports = articleController