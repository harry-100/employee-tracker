const db = require('./db/connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const { showDepartments, showRoles} = require('./dbQueries');

//Start DB connection

db.connect(err => {
    if(err) throw err;
    console.log('Database Connected');
});

const userInfo = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do',
            choices: ['View All Departments', 'View All Roles', 'Exit']
        }
    ])
    .then(userResponse => {
        switch(userResponse.action) {
            case 'View All Departments':
                showDepartments();
                break;
            
            case 'View All Roles':
                showRoles();                
                break;
    
            case 'Exit':
                console.log('Good Bye');
                db.end();
                break;
            
        };
    }); 
};

userInfo();


module.exports = userInfo;