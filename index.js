const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const {showDepartments, showRoles} = require('./DbQueries');
const PORT = process.env.PORT || 3001;
const app = express();

// Default response for any other request( Not found)
/* app.use((req, res) => {
    res.status(404).end();
}); */



// Start server after DB connection
db.connect(err => {
    if(err) throw err;
    console.log('Database connected');

});

/* function showDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
    });
}; */
showDepartments();
showRoles();