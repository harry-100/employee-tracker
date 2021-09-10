const db = require('./db/connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
// const { showDepartments, showRoles, viewAllDepartments} = require('./dbQueries');

//Start DB connection

db.connect(err => {
    if(err) throw err;
    console.log('Database Connected');
});

const userInfo = () => {
     inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee', 'Exit']
/*             choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee', 'Exit']
 */        }
    ])
    .then(userResponse => {
        switch(userResponse.action) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            
            case 'View All Roles':
                viewAllRoles();             
                break;
                
            case 'View All Employees':
                viewAllEmployees();
                break;
            
            case 'Add a Department':
                addDepartment();
                break;

            case 'Add a Role':
                addRole();
                break;

            case 'Add an Employee':
                addEmployee();
                break;

            case 'Update an Employee':
                updateEmployee();
                break;

            case 'Exit':
                console.log('Good Bye');
                db.end();
                break;
        };
    }); 
};

userInfo();

viewAllRoles = () => {
    const sql = `SELECT role.id, role.title, role.salary, department.department_name FROM role INNER JOIN department ON role.department_id = department.id`;
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        userInfo();
    });
};

viewAllDepartments = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        userInfo();
    });
};

viewAllEmployees = () => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary, employee.manager_id FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id`;
    db.query(sql, (err, rows) => {
        if(err) throw err;
        // adding manager column with first and last name combined
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].manager_id == null) {
                rows[i].manager = 'None';
            }
            else {
                rows[i].manager = rows[rows[i].manager_id - 1].first_name + " " + rows[rows[i].manager_id - 1].last_name;
            }
            //  removing manager_id column from the table for display
            delete rows[i].manager_id;
        }
        console.table(rows);
        userInfo();
    })
}

// Adding a department

const addDepartment = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'department_name',
        message: 'Enter the name of the department to be added'
        }
    ])
    .then(newDepartment => {
        const sql = `INSERT INTO department (department_name) VALUES ("${newDepartment.department_name}")`;
        db.query(sql, (err, rows) => {
            if(err) throw err;
            console.log(`A new department "${newDepartment.department_name}" added`);
            viewAllDepartments();
        })

    });
    
};

// Adding a role

const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name for the role'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary'
        }
    ])
    .then(response)
}