const db = require('./db/connection');

cTable = require('console.table');

function showDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
    });
};

function showRoles(){
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        });
};

module.exports = {showDepartments, showRoles};