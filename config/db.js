const Sequelize = require("sequelize");

const sequelize = new Sequelize("koa2", "root", "111111", {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  dialectOptions: {
    // charset: 'uft8mb4',
    // collate: 'utfm8b4_unicode_ci',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00'
})
// 创建模型
sequelize.sync({
  force: false
})
module.exports = {
  sequelize
}