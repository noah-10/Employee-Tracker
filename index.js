const inquirer = require("inquirer");
const mysql = require("mysql2");
const CheckResponse = require("./lib/cli_response.js")

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Andrew?2003',
        database:'employee_db'
    },
    console.log('Connected to the employee database')
);

class Cli {
    
    run(){
        return inquirer

        .prompt([
        {
          type: "list",
          name: "db_options",
          message: "What would you like to do?",
          choices:[ "View All Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View All Roles",
                    "Add Role",
                    "View All Departments",
                    "Add Department" ]  
        }
        ])
        .then((response) => {
            const userOption = response.db_options;
            const sql = new CheckResponse(userOption).render();

            db.query(sql, (err, result) => {
                if(err){
                    console.error(err);
                }
                else{
                    console.log("Success", result);
                }
            })

        });
    };
    
};

const init = () => {
    const newInstance = new Cli;

    newInstance.run();
}

init();

module.exports = Cli;