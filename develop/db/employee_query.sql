SELECT  employee.employee_id, 
        employee.first_name, 
        employee.last_name, 
        roles.role_title,
        department.department_name,
        roles.role_salary

FROM employee
LEFT JOIN roles ON employee.role_id = roles.role_id
LEFT JOIN department ON roles.department_id = department.department_id;