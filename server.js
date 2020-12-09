const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});

const start = () => {
    return inquirer.prompt({
        name: "menu",
        type: "list",
        message: "Please select an option below",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees in database",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role",
            "Exit"
        ]
    }).then(response => {
        console.log(response.menu) {
        switch (response.menu) {
            case "View all departments":
                return getDepartments();
            case "View all roles":
                return getRoles();
            case "View all employees in database":
                return getEmployees();
            case "Add a department":
                return addDepartment();
            case "Add a role":
                return addRole();
            case "Add an employee role":
                return addEmployee();
            case "Update employee role":
                return updateEmployeeRole();
            case "Exit"
                return connection.end();
        }
        }
    })
}