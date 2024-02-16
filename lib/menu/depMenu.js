const Department = require("../Department");
const db = require("../../config/config");
const inquirer = require("inquirer");

class DepMenu {

    // Sends to the department class function to get all departments for use of selection
    getAllDep(){
        const allDep = new Department();

        return allDep.getAllDepartments();
    }

    // Sends to the department class function to be able to view all departments
    viewDepMenu(){
        const allDep = new Department();

        return allDep.viewAllDepartments();
    }

    addDepMenu(){

        //prompt questions 
        inquirer.prompt([
            {
                type: "input",
                name: "department",
                message: "What is the name of the department?"
            },
        ])
        // take the response and send it to the Department class function to query an insert into db
        .then(({department}) => {

            const newDepartment = new Department();

            newDepartment.addDepartment(department);
        })

    }
}

module.exports = DepMenu;