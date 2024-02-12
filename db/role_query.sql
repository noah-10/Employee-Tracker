-- View Roles --

SELECT roles.role_id, roles.role_title, department.department_name, roles.role_salary
FROM roles
LEFT JOIN department ON roles.department_id = department.department_id;