const EmployeeMenu = require("./empMenu.js");
const RoleMenu = require("./roleMenu.js");
const DepMenu = require("./depMenu.js");

class CheckResponse {
    constructor(response){
        this.response = response;
    }

    render(){
        if(this.response === "Add Employee"){
            return new EmployeeMenu().addEmployeeMenu();

        }else if(this.response === "View All Employees"){
            return new EmployeeMenu().viewEmployeesMenu();
        
        }else if(this.response === "Update Employee Role"){
            return new EmployeeMenu().updateEmployeeMenu();

        }else if(this.response === "View All Roles"){
            return new RoleMenu().viewRoleMenu();

        }else if(this.response === "Add Role"){
            return new RoleMenu().addRoleMenu();

        }else if(this.response === "View All Departments"){
            return new DepMenu().viewDepMenu();

        }else if(this.response === "Add Department"){
            return new DepMenu().addDepMenu();
        }
        else{
            console.log("Error with accepting response");
        }
    }
}

module.exports = CheckResponse;