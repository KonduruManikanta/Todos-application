const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'  // Path to your SQLite database file
});

module.exports = sequelize;
