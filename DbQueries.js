const db = require('./db/connection');
const mysql = require('mysql2');
const cTable = require('console.table');

const userInfo = require('./server');

showDepartments = async () => {
    const sql = `SELECT * FROM department`;
    const test1 = db.promise().query(sql)
    return test1
  
    // console.log('test1=', test1);
};
viewAllDepartments = () => {
    showDepartments().then(([rows]) => {
        console.table('rows', rows);
        // userInfo();
    });
}

viewAllRoles = () => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        userInfo();
    });
};

module.exports = {showDepartments, showRoles, viewAllDepartments};