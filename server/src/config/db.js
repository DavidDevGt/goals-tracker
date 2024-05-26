const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rootpassword',
    database: 'goal_tracker_db'
});

const promisePool = pool.promise();

module.exports = promisePool;
