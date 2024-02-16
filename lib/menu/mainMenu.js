const inquirer = require("inquirer");
const check = require("../cli_response");

exports.mainMenu = mainMenu;

function mainMenu(){
    //Prompt what the user wants to do
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

        //Calls for the check response which will send it to a function that will end up query to the db based on what the user wants to do/see
        check.checkResponse(userOption);
    });
}
