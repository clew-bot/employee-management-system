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

const init = () => {
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
            "Exit"
        ]
    }).then(response => {
        console.log(response.menu) 
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
            case "Add an employee":
                return addEmployee();
            case "Exit":
                return connection.end();
        }

       
    })
}

const getDepartments = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if(err) throw err;
        //console.log(res)
        res.forEach(department => {
            console.table(`ID: ${department.id} | Name: ${department.name}`)
        })
    });
}
//Using SQL to retrieve roles within the database //
const getRoles = () => {
// using a 'SQL Literal' in a sense to grab roles //
    let query = `SELECT roles.id, roles.title, roles.salary, department.name
    AS department
    FROM roles
    INNER JOIN department
    ON roles.department_id = department.id`;

    connection.query(query, (err, res) => {
        if(err) throw err;
        console.table(res)
    });
}

const getEmployees = () => {
    const query = `SELECT * FROM employee`
    connection.query(query, (err, res) => {
        if(err) throw err;
        console.table(res)
    });
}

const addDepartment = () => {
    inquirer.prompt({
        name: "department",
        type: "input",
        message: "What is the name of the new department?"
    }).then(answer => {
        const query = `INSERT INTO department (name) VALUES ( ? )`;
        connection.query(query, answer.department, (err, res) => {
            console.table(`Successfully added department ${(answer.department)}`)
        })
        getDepartments();
    })
}

const addRole = () => {
    return inquirer.prompt([{
        name: "title",
        type: "input",
        message: "What is the title of the new role?"
    },
{
    name: "salary",
    type: "number",
    message: "What is the salary of the new role?",
},{
    name: "department",
    type: "number",
    message: "Which department does this role fall under?",
}, 
]).then(answer => {
    let query = "INSERT INTO roles (title, salary, department_id) VALUES ( ?, ?, ? )";
    connection.query(query, [answer.title, answer.salary, answer.department], (err, res) => {
        console.table(`Successfully added the ${(answer.title)} role.`)
    })
    getRoles();
})
}

const addEmployee = () => {
    return inquirer.prompt([{
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?",
    }, {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name?",
    }, {
        name: "role_id",
        type: "number",
        message: "What role does the employee have?",
    }
]).then(answer => {
    let query = "INSERT INTO employee (first_name, last_name, role_id) VALUES ( ?, ?, ? )";
    connection.query(query, [answer.first_name, answer.last_name, answer.role_id], (err, res) => {
        console.table(`Successfully added the: employee.`)
    })
})
}

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
});

init();