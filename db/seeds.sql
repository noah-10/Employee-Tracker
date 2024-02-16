INSERT INTO department (department_name)
VALUES  ("Marketing"),
        ("Sales"),
        ("Engineering");

INSERT INTO roles (department_id, role_title, role_salary)
VALUES  (1, "Marketing Lead", 150000),
        (2, "Sales Associate", 65000),
        (3, "Software Engineer", 200000),
        (1 , "Social Media Lead", 100000);

INSERT INTO employee (role_id, first_name, last_name)
VALUES  (2, "noah", "fryman"),
        (3,"Ava", "riley"),
        (1, "chris", "fryman");

UPDATE employee SET manger_id = 3 WHERE employee_id = 1;

UPDATE employee SET manger_id = 2 WHERE employee_id = 3;
