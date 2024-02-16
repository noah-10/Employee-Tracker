const inquirer = require("inquirer");
const CheckResponse = require("./lib/cli_response.js");
const db = require("./config/config.js");
const menu = require("./lib/mainMenu.js");

db.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }
})

global.db = db;

// class Cli {
    
//     run(){
//         //Prompt questions
//         inquirer

//         .prompt([
//         {
//           type: "list",
//           name: "db_options",
//           message: "What would you like to do?",
//           choices:[ "View All Employees",
//                     "Add Employee",
//                     "Update Employee Role",
//                     "View All Roles",
//                     "Add Role",
//                     "View All Departments",
//                     "Add Department" ]  
//         }
//         ])
//         .then((response) => {
//             // save response to variable
//             const userOption = response.db_options;
            
//             // Run a new check response to decide what sql query to render
//             new CheckResponse().render(userOption);

//         });
//     };
    
// };

// const init = () => {

menu.mainMenu();
    // const newInstance = new Cli;

    // newInstance.run();
// }

// init();

// module.exports = Cli;