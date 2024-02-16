const inquirer= require("inquirer");
const db = require("../config/config");
const Roles = require("./classes/Role");
const DepartmentMenu = require("./depMenu");

class RoleMenu {

    getRoles(){
        const allRoles = new Roles();

        return allRoles.getAllRoles();
    }

    viewRoleMenu(){
        const allRoles = new Roles();

        allRoles.showAll();
    }

    addRoleMenu(){

        const dep = new DepartmentMenu();

        dep.getAllDep()
        .then(departments => {
            const allDepartments = departments.map(department => ({
                name: `${department.department_name}`,
                value: `${department.department_id}`
            }))

            inquirer.prompt([
                {
                    type: "input",
                    name: "role",
                    message: "What is the name of the role?"
                },

                {
                    type: "input",
                    name: "salary",
                    message: "What is the salary of the role?",
                },

                {
                    type: "list",
                    name: "department",
                    message: "Which department does the role belong to?",
                    choices: allDepartments,
                }
            ])
            .then(({role, salary, department}) => {
                
                const newRole = new Roles();

                newRole.newRole(role, salary, department);

            })
        })
    }

}

module.exports = RoleMenu;