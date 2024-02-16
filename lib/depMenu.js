const Department = require("./classes/Department");
const db = require("../config/config");
const inquirer = require("inquirer");

class DepMenu {

    getAllDep(){
        const allDep = new Department();

        return allDep.getAllDepartments();
    }

    viewDepMenu(){
        const allDep = new Department();

        return allDep.viewAllDepartments();
    }

    addDepMenu(){

        inquirer.prompt([
            {
                type: "input",
                name: "department",
                message: "What is the name of the department?"
            },
        ])
        .then(({department}) => {

            const newDepartment = new Department();

            newDepartment.addDepartment(department);
        })

    }
}

module.exports = DepMenu;