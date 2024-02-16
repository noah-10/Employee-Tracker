const db = require("../config/config");
const menu = require("./menu/mainMenu");

class Role {

    //Gets all roles for the use of selecting a role
    getAllRoles(){
        const sql =`SELECT role_id, role_title FROM roles;`;

        return db
        .promise()
        .query(sql)
        .then(([rows]) => {
            return rows;
        })
    }

    // Querys to the db to create a table of all roles, the role salary and the department its from
    async showAll(){
        const sql = `SELECT roles.role_id, roles.role_title, department.department_name, roles.role_salary
        FROM roles
        LEFT JOIN department ON roles.department_id = department.department_id;`

        // Waits for the query and then shows table and then prompts the menu for a selection
        try{
            const [result] = await db.promise().query(sql);
            console.table(result);
            menu.mainMenu();
        }catch (err){
            console.error(err);
        }
        
    }

    // Function to query to the db to add a role based on previous prompts
    async newRole(role, salary, department){

        const sql = `INSERT INTO roles (role_title, role_salary, department_id)
            VALUES("${role}", "${salary}", "${department}")`

        // Waits for the query and then logs if it was successful and then prompts the menu for a selection
        try {
            await db.promise().query(sql);
            console.log("Successfully added role!");
            menu.mainMenu();
        } catch (err){
            console.error(err);
        }
    }
}

module.exports = Role;