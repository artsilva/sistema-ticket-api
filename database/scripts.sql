CREATE DATABASE ticket;

CREATE SCHEMA IF NOT EXISTS security;
CREATE SCHEMA IF NOT EXISTS general;

DROP TABLE IF EXISTS security.roles;
CREATE TABLE security.roles(
    "id" INTEGER PRIMARY KEY,
    "role" VARCHAR(20)
);
INSERT INTO security.roles(id, role) VALUES (1, 'administrador'), (2, 'soporte');

DROP TABLE IF EXISTS security.users;
CREATE TABLE security.users(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(40),
    "last_name_f" VARCHAR(40),
    "last_name_m" VARCHAR(40),
    "rut" VARCHAR(10),
    "email" TEXT,
    "role_id" INTEGER REFERENCES security.roles(id),
    "user" VARCHAR(20),
    "password" VARCHAR(20)
);
