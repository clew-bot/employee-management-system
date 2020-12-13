USE employee_db;

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("HR");

INSERT INTO roles (title, salary, department_id) VALUES ("In-house Sales Director", 10, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Online Marketing", 70, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Software Engineer", 125, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Financial Advisor", 97, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Product Designer", 120, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Recruiter", 65, 3);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Billie", "Eilish", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Black", "Pink", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Cardi", "B", 6);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Arianna", "Grande", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Selena", "Gomez", 5);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Steve", "Jobs", 3);