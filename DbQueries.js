const db = require('./db/connection');
const mysql = require('mysql2');
const cTable = require('console.table');
const userInfo = require('./server');

showDepartments = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        userInfo();
    });
};

showRoles = () => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        userInfo();
    });
};

module.exports = {showDepartments, showRoles};