const EmployeeMenu = require("./emp_prompt.js");

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
        }
        else{
            console.log("Error with accepting response");
        }
    }
}

module.exports = CheckResponse;