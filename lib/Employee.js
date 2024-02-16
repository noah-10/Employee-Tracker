const db = require("../config/config");
const menu = require("./menu/mainMenu");

class Employee {
    constructor(firstName, lastName, roleId, managerId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
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

        const sql = `SELECT 
        e.employee_id,
        e.first_name AS employee_first_name,
        e.last_name AS employee_last_name,
        CONCAT(m.first_name, ' ', m.last_name) AS manager_name,
        r.role_title AS role_title,
        r.role_salary AS salary,
        d.department_name AS department_name
    FROM 
        employee e
    LEFT JOIN 
        employee m ON e.manager_id = m.employee_id
    LEFT JOIN
        roles r ON e.role_id = r.role_id
    LEFT JOIN
        department d ON r.department_id = d.department_id;`;

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

        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES("${this.firstName}", "${this.lastName}", ${this.roleId}, "${this.managerId}")`;

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