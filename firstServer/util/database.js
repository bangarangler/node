const mysql = require("mysql2")

const pool = mysql.createPool({
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
  database: process.env.MY_SQL_DB,
  password: process.env.MY_SQL_PW
})

module.exports = pool.promise();
