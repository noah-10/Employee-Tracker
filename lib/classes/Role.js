const db = require("../../config/config");

class Role {

    getAllRoles(){
        const sql =`SELECT role_id, role_title FROM roles;`;

        return db
        .promise()
        .query(sql)
        .then(([rows]) => {
            return rows;
        })
    }

    showAll(){
        const sql = `SELECT roles.role_id, roles.role_title, department.department_name, roles.role_salary
        FROM roles
        LEFT JOIN department ON roles.department_id = department.department_id;`

        db.query(sql, (err, result) => {
            if(err){
                console.error(err);
            }
            else{
                console.table(result);
            }
        })
    }

    newRole(role, salary, department){
        // console.log(role);
        // console.log(salary);
        // console.log(department);

        const sql = `INSERT INTO roles (role_title, role_salary, department_id)
            VALUES("${role}", "${salary}", "${department}")`

        db.query(sql, (err) => {
            if(err){
                console.error(err);
            }
            else{
                console.log("Successfully added role");
                this.showAll();
            }
        })
    }
}

module.exports = Role;