/*
 * @Author: your name
 * @Date: 2020-05-11 11:05:29
 * @LastEditTime: 2020-05-20 15:51:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa\routes\index.js
 */
const router = require('koa-router')()
const ArticleController = require('../controllers/article')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/article/:id', ArticleController.detail)
router.get('/findOne/:id', ArticleController.findOne)

module.exports = router