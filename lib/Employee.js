const db = require("../config/config");
const menu = require("./menu/mainMenu");

class Employee {
    constructor(firstName, lastName, roleId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
    }

    //Gets all employees for the use of selecting an employee
    getAll(){
        const sql = `SELECT employee_id, first_name, last_name FROM employee;`

        return db
        .promise()
        .query(sql)
        .then(([rows]) => {
            return rows;
        })
    }

    // Querys to the db to create a table of all employees and their role,department, salary
    async showAll(){
        const sql = `SELECT  employee.employee_id, 
        employee.first_name, 
        employee.last_name, 
        roles.role_title,
        department.department_name,
        roles.role_salary

FROM employee
LEFT JOIN roles ON employee.role_id = roles.role_id
LEFT JOIN department ON roles.department_id = department.department_id;`;

        // Waits for the query and then shows table and then prompts the menu for a selection
        try {
            const [result] = await db.promise().query(sql);
            console.table(result);
            menu.mainMenu();
        } catch (err) {
            console.error(err);
        }
    }

    // Function to query to the db to add an employee based on previous prompts
    async addEmployee(){

        const sql = `INSERT INTO employee (first_name, last_name, role_id)
            VALUES("${this.firstName}", "${this.lastName}", ${this.roleId})`;

        // Waits for the query and then logs if it was successful and then prompts the menu for a selection
        try{
            await db.promise().query(sql);
            console.log("Successfully added employee!");
            menu.mainMenu();
        } catch (err){
            console.error(err);
        }

    }

    // Function to query to the db and update an employees role based on previous prompts
    async updateEmployee(employeeId, roleId){

        const employee = employeeId;
        const role = roleId;
       
        const sql = `UPDATE employee
        SET role_id = ${role}
        WHERE employee_id = ${employee};`

        // Waits for the query and then logs if it was successful and then prompts the menu for a selection
        try{
            await db.promise().query(sql);
            console.log("Successfully updated employee's role!");
            menu.mainMenu();
        }catch (err){
            console.error(err);
        }
    }
}

module.exports = Employee;