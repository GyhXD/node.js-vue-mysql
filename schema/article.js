const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('article', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'title'
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'author'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'content'
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'category'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'createdAt'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'createdAt'
    }
  }, {
    freezeTableName: true
  })
}