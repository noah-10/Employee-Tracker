const inquirer = require("inquirer");
// const CheckResponse = require("./cli_response.js");
const check = require("./cli_response");

exports.mainMenu = mainMenu;

function mainMenu(){
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
        // save response to variable
        const userOption = response.db_options;

        check.checkResponse(userOption);
        
        // Run a new check response to decide what sql query to render
        // new CheckResponse(userOption).render();

    });
}


// module.exports = menu;
