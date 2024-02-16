const db = require("../../config/config");
const menu = require("../mainMenu");

class Department {

    getAllDepartments(){
        const sql = `SELECT * FROM department;`;

        return db
        .promise()
        .query(sql)
        .then(([rows]) => {
            return rows;
        })
    }

    async viewAllDepartments(){
        const sql = `SELECT * FROM department;`;

        try{
            const [result] = await db.promise().query(sql);
            console.table(result);
            menu.mainMenu();
        } catch (err){
            console.error(err);
        }
        
    }

    async addDepartment(department){
        const sql = `INSERT INTO department (department_name)
            VALUES("${department}")`;
        
            try {
                await db.promise().query(sql);
                console.log("Successfully added department");
                this.viewAllDepartments();
                menu.mainMenu()
            } catch (err){
                console.error(err);
            }
    }
}

module.exports = Department;