const EmployeeMenu = require("./menu/empMenu.js");
const RoleMenu = require("./menu/roleMenu.js");
const DepMenu = require("./menu/depMenu.js");

exports.checkResponse = checkResponse

//Based on response it will call the appropriate function
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