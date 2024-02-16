const db = require("../../config/config");

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

    viewAllDepartments(){
        const sql = `SELECT * FROM department;`;

        db.query(sql, (err, result) => {
            if(err){
                console.error(err);
            }
            else{
                console.table(result);
            }
        })
    }

    addDepartment(department){
        const sql = `INSERT INTO department (department_name)
            VALUES("${department}")`;
        
            db.query(sql, (err) => {
                if(err){
                    console.error(err);
                }
                else{
                    console.log("Successfully added department");
                    this.viewAllDepartments();
                }
            })
    }
}

module.exports = Department;