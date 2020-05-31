CREATE DATABASE prueba;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users(name, email) 
    VALUES ('joe','example@a.com'), ('ryan', 'asdf@gmail.c')