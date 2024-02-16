const db = require("../../config/config");
const menu = require("../mainMenu");

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

    async showAll(){
        const sql = `SELECT roles.role_id, roles.role_title, department.department_name, roles.role_salary
        FROM roles
        LEFT JOIN department ON roles.department_id = department.department_id;`

        try{
            const [result] = await db.promise().query(sql);
            console.table(result);
            menu.mainMenu();
        }catch (err){
            console.error(err);
        }
        
    }

    async newRole(role, salary, department){
        // console.log(role);
        // console.log(salary);
        // console.log(department);

        const sql = `INSERT INTO roles (role_title, role_salary, department_id)
            VALUES("${role}", "${salary}", "${department}")`

        try {
            await db.promise().query(sql);
            console.log("Successfully added role");
            this.showAll();
            menu.mainMenu();
        } catch (err){
            console.error(err);
        }
    }
}

module.exports = Role;