const inquirer = require("inquirer");
const db = require("../config/config");

class Employee {
    constructor(response){
        this.response = response;
    }

    // Checks if user wants to view employees or add to them
    checkChoice(){
        if(this.response === "View All Employees"){
            return this.renderViewEmployees();
        }else if(this.response === "Add Employee"){
            return this.renderAddEmployee();
        }
    };

    // renders sql query to view all employees
    renderViewEmployees(){
        const sql = `SELECT  employee.employee_id, 
        employee.first_name, 
        employee.last_name, 
        roles.role_title,
        department.department_name,
        roles.role_salary

FROM employee
LEFT JOIN roles ON employee.role_id = roles.role_id
LEFT JOIN department ON roles.department_id = department.department_id;`;

        db.query(sql, (err, result) => {
            if(err){
                console.error(err);
            }
            else{
                console.table(result);
            }
        })

    };

    renderAddEmployee(){
        return inquirer
        .prompt([
        {
            type: "input",
            name: "new_employee_first_name",
            message: "What is the employee's first name?"
        },

        {
            type: "input", 
            name: "new_employee_last_name",
            message: "What is the employees last name?"
        },

        {
            type: "list",
            name: "new_employee_role"
        }
        ])
    }
}

module.exports = Employee;