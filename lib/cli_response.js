const Employee = require("./employee.js");

class CheckResponse {
    constructor(response){
        this.response = response;
    }

    render(){
        if(this.response === "View All Employees" || this.response === "Add Employee"){
            return new Employee(this.response).checkChoice();
        }
        else{
            console.log("Error with accepting response");
        }
    }
}

module.exports = CheckResponse;