const inquirer = require("inquirer");
const Roles = require("./roleMenu");
const Employee = require("./classes/Employee");

class EmployeeMenu {



    // Sends to the Employee Class to render the table of all employees
    viewEmployeesMenu(){
        const allEmployees = new Employee();

        allEmployees.showAll();

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
                // console.log(response.role);
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

            const role = new Roles();
            
            role.getRoles()
            .then(roles => {
                const allRoles = roles.map(role => ({
                    name: `${role.role_title}`,
                    value: role.role_id,
                }))

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
                   const emp = new Employee();

                   emp.updateEmployee(employeeId, roleId);
                })
            })
        })
    }
}

module.exports = EmployeeMenu;