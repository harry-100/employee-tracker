INSERT INTO department (department_name) 
VALUES 
    ('Finance'),
    ('Engineering'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Accountant', 4500.00, 1),
    ('Financial Analyst', 6500.00, 1),
    ('Supervisor', 6000.00, 2),
    ('Engineer', 5000.00, 2),
    ('Salesman', 3000.00, 3),
    ('Marketing Manager', 6500.00, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Rafael', 'Nadal', 1, NULL),
    ('Andre', 'Agassi', 2, 1),
    ('Ivan', 'Lendl', 3, NULL),
    ('Jimmy', 'Connors', 4, 2),
    ('Mats', 'Wilander', 5, 3),
    ('John', 'McEnroe', 6, 3),
    ('Boris', 'Becker', 1, 3),
    ('Martina', 'Navratilova', 2, NULL),
    ('Steffi', 'Graf', 2, 4),
    ('Gabriela', 'Sabatini', 3, 4),
    ('Serena', 'Williams', 4, 5),
    ('Roger', 'Federer', 6, 5);
    
