const db = require("../../config/config");

class Employee {
    constructor(firstName, lastName, roleId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
    }

    getAll(){
        const sql = `SELECT employee_id, first_name, last_name FROM employee;`

        return db
        .promise()
        .query(sql)
        .then(([rows]) => {
            return rows;
        })
    }

    showAll(){
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
    }

    addEmployee(){

        const sql = `INSERT INTO employee (first_name, last_name, role_id)
            VALUES("${this.firstName}", "${this.lastName}", ${this.roleId})`;

        db.query(sql, (err) => {
            if(err){
                console.error(err);
            }
            else{
                this.showAll();
            }
        })
    }

    updateEmployee(employeeId, roleId){

        const employee = employeeId;
        const role = roleId;
       
        const sql = `UPDATE employee
        SET role_id = ${role}
        WHERE employee_id = ${employee};`

        db.query(sql, (err) => {
            if(err){
                console.error(err);
            }else{
                console.log("Successfully updated employee's role");
                this.showAll();
            }
        })
    }
}

module.exports = Employee;