const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "mysql",
    user: "root",
    password: "constwon111",
    database: "myapp",
    // port: process.env.MYSQL_PORT
});
exports.pool = pool;
