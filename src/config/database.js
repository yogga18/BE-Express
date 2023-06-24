const mysql = require('mysql2');

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // waitForConnections: true,
  // connectionLimit: 10,
  // maxIdelTime: 10,
  // idleTimeout: 600000,
  // queueLimit: 0,
});

module.exports = dbPool.promise();
