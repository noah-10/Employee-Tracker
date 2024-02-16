const EmployeeMenu = require("./empMenu.js");
const RoleMenu = require("./roleMenu.js");
const DepMenu = require("./depMenu.js");

// class CheckResponse {
    // constructor(response){
    //     this.response = response;
    // }

exports.checkResponse = checkResponse

function checkResponse(response){
    if(response === "Add Employee"){
        return new EmployeeMenu().addEmployeeMenu();

    }else if(response === "View All Employees"){
        return new EmployeeMenu().viewEmployeesMenu();
    
    }else if(response === "Update Employee Role"){
        return new EmployeeMenu().updateEmployeeMenu();

    }else if(response === "View All Roles"){
        return new RoleMenu().viewRoleMenu();

    }else if(response === "Add Role"){
        return new RoleMenu().addRoleMenu();

    }else if(response === "View All Departments"){
        return new DepMenu().viewDepMenu();

    }else if(response === "Add Department"){
        return new DepMenu().addDepMenu();
    }
    else{
        console.log("Error with accepting response");
    }
}
// }

// module.exports = CheckResponse;