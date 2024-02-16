const inquirer = require("inquirer");
const Roles = require("./roleMenu.js");
const Employee = require("../Employee.js");

class EmployeeMenu {

    // Sends to the Employee Class to render the table of all employees
    async viewEmployeesMenu(){
        const allEmployees = new Employee();

        try {
            await allEmployees.showAll();
        } catch (err){
            console.error(err);
        }
        

    };

    addEmployeeMenu(){

        // Get all roles
        const role = new Roles();

        role.getRoles()
        .then(roles => {
            //Map them out to an array with each role name with its value being it's id
            const allRoles = roles.map(role => ({
                name: `${role.role_title}`,
                value: role.role_id,
            }))

            // Prompt questions for adding a new employee
            inquirer.prompt([
                {
                    type: "input",
                    name: "first_name",
                    message: "What is the employee's first name?"
                },
        
                {
                    type: "input", 
                    name: "last_name",
                    message: "What is the employees last name?"
                },
        
                {
                    type: "list",
                    name: "role_id",
                    message: "What is the employee's role?",
                    choices: allRoles,
                }
            ])
            // Take the response and send it to the employee class to query an insert into db
            .then(({first_name, last_name, role_id}) => {
                const emp = new Employee(
                    first_name,
                    last_name,
                    role_id
                );

                emp.addEmployee();

            })
        })
    }

    updateEmployeeMenu(){
        // Get all employees
        const emp = new Employee();

        emp.getAll()
        .then(employees => {
            // Get all employees and map into first name, last name and have each of it's values being it's id
        const allEmployees = employees.map(employee => ({
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.employee_id
            }))

            //get all roles 
            const role = new Roles();
            
            //map them so the name has a value of it's id
            role.getRoles()
            .then(roles => {
                const allRoles = roles.map(role => ({
                    name: `${role.role_title}`,
                    value: role.role_id,
                }))

                //prompt questions
                inquirer.prompt([
                    {
                        type: "list",
                        name: "employeeId",
                        message: "Which employee's role do you want to change?",
                        choices: allEmployees,
                    },
    
                    {
                        type: "list",
                        name: "roleId",
                        message: "Which role do you want to assign the selected employee?",
                        choices: allRoles,
                    },
                ])
                .then(({employeeId, roleId}) => {
                    // Calls for the function that will make the query to the db
                   const emp = new Employee();

                   emp.updateEmployee(employeeId, roleId);
                })
            })
        })
    }
}

module.exports = EmployeeMenu;