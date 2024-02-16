const inquirer= require("inquirer");
const Roles = require("../Role");
const DepartmentMenu = require("./depMenu");

class RoleMenu {

    // Sends to the Role class function to get all roles for use of selection
    getRoles(){
        const allRoles = new Roles();

        return allRoles.getAllRoles();
    }

    // Sends to the Role class function to be able to view all roles
    viewRoleMenu(){
        const allRoles = new Roles();

        allRoles.showAll();
    }

    addRoleMenu(){

        //Get all departments
        const dep = new DepartmentMenu();

        dep.getAllDep()
        .then(departments => {
            // Map them out so each department name has it's value as it's id
            const allDepartments = departments.map(department => ({
                name: `${department.department_name}`,
                value: `${department.department_id}`
            }))

            // prompt questions
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
                //take the response and send it to the Role class to query an insert into db
                const newRole = new Roles();

                newRole.newRole(role, salary, department);

            })
        })
    }

}

module.exports = RoleMenu;