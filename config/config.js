const mysql = require("mysql2");

// connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Andrew?2003',
        database:'employee_db'
    },
    console.log('Connected to the employee database')
);

module.exports = db;