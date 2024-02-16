const db = require("../config/config");
const menu = require("./menu/mainMenu");

class Department {

    //Gets all employees for the use of selecting a department
    getAllDepartments(){
        const sql = `SELECT * FROM department;`;

        return db
        .promise()
        .query(sql)
        .then(([rows]) => {
            return rows;
        })
    }

    // Querys to the db to create a table of all departments
    async viewAllDepartments(){
        const sql = `SELECT * FROM department;`;

        // Waits for the query and then shows table and then prompts the menu for a selection
        try{
            const [result] = await db.promise().query(sql);
            console.table(result);
            menu.mainMenu();
        } catch (err){
            console.error(err);
        }
        
    }

    // Function to query to the db to add a department based on previous prompts
    async addDepartment(department){
        const sql = `INSERT INTO department (department_name)
            VALUES("${department}")`;
        
            // Waits for the query and then logs if it was successful and then prompts the menu for a selection
            try {
                await db.promise().query(sql);
                console.log("Successfully added department!");
                menu.mainMenu()
            } catch (err){
                console.error(err);
            }
    }
}

module.exports = Department;