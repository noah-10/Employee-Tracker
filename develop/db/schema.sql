-- Create database --
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- Create table for the departments --
CREATE TABLE department (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- Create table for the roles -- 
CREATE TABLE roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    -- Default DECIMAL is 10 numbers before the decimal and zero after the decimal -- 
    role_salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(department_id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
);

