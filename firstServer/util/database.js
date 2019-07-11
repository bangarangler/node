const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node-schema',
  process.env.MY_SQL_USER,
  process.env.MY_SQL_PW,
  {dialect: 'mysql', host: process.env.MY_SQL_HOST},
);

module.exports = sequelize;
