CREATE DATABASE ticket;

CREATE SCHEMA IF NOT EXISTS security;
CREATE SCHEMA IF NOT EXISTS solticket;


CREATE TABLE security.roles (
	id serial not null primary key,
	role varchar(50) not null
);
INSERT INTO security.roles(role) VALUES ('solicitante'), ('tecnico');


CREATE TABLE solticket.areas (
	id serial not null primary key,
	description varchar(100) not null
);
INSERT INTO solticket.areas(description) 
VALUES ('soporte'), ('recursos humanos'), ('bodega'), ('desarrollo'), ('casino');


CREATE TABLE solticket.users (
	id serial2 NOT null primary KEY,
	username varchar (50) NOT NULL,
	lastname_f varchar (255) NOT NULL,
	lastname_m varchar (255) NOT NULL,
	rut varchar(10) NOT NULL,
	mail varchar (50) NOT null,
	role_id integer references security.roles(id),
	area_id integer references solticket.areas(id)
);
INSERT INTO solticket.users(username,lastname_f, lastname_m, rut, mail, role_id, area_id) 
VALUES ('juan', 'perez', 'gonzalez', '16234666-6', 'asdf@gmail.com', 1, 1),
	   ('john', 'urbina', 'gonzalez', '16234666-6', 'asdf@gmail.com', 1, 2),
	   ('carlos', 'perez', 'gonzalez', '16234666-6', 'asdf@gmail.com', 1, 3),
	   ('arturo', 'sil', 'carrera', '16234666-6', 'asdf@gmail.com', 2, 1),
	   ('marcos', 'tiddeman', 'rom', '16234666-6', 'asdf@gmail.com', 2, 2),
	   ('maría', 'sil', 'rom', '16234666-6', 'asdf@gmail.com', 2, 3),
	   ('claudia', 'campos', 'ramirez', '16234666-6', 'asdf@gmail.com', 2, 4);


CREATE TABLE security.users_sec (
	id serial2 NOT null primary KEY,
	user_id integer references solticket.users(id),
	nickname varchar(255) not null,
	pass varchar(255) NOT NULL
);
INSERT INTO security.users_sec(user_id, nickname, pass) 
values (1, 'juancho','test123'),
	   (2, '1','1')


CREATE TABLE solticket.files (
	id serial not null primary key,
	description varchar(255) not null,
	doc bytea not null
);


CREATE TABLE solticket.status (
	id serial not null primary key,
	description varchar(255)
);
INSERT INTO solticket.status(description) 
VALUES ('Sin Asignar'), ('En Proceso'), ('En Espera'), ('Detenido'), ('Finalizado');


CREATE TABLE solticket.request_types (
	id serial not null primary key,
	area_id integer references solticket.areas(id),
	description varchar(255) not null
);
INSERT INTO solticket.request_types(area_id, description) 
VALUES (1, 'Computador'), (1, 'Internet'), (2, 'ingreso sistema'), (2, 'contrato'),
(3, 'Insumos'), (3, 'Logística'), (4, 'aplicación'), (4, 'inducción'), 
(5, 'ticket'), (5, 'alimentos'), (5, 'compra'), (5, 'transporte');


CREATE TABLE solticket.requests (
	id serial4 not null primary key,	
	status_id integer references solticket.status(id),
	petitioner_id integer references solticket.users(id),
	user_tech_id integer references solticket.users(id),
	type_id integer references solticket.request_types(id),
	details varchar(255) not null,
	title varchar(255) not null,
	date_creation timestamp not null,
	date_modify timestamp not null,
	date_expire timestamp not null,
	emails varchar(255),
	reason_status varchar(255)
);


CREATE TABLE solticket.request_files (
	id serial not null primary key,
	request_id integer references solticket.requests(id),
	description varchar(255) not null,
	doc bytea not null
);


CREATE TABLE solticket.request_file_type (
	id serial not null primary key,
	type_id integer references request_types(id),
	file_id integer references files(id)
);

CREATE TABLE solticket.sla (
	id serial not null primary key,
	type_id integer references solticket.request_types(id),
	days numeric(2) not null
);
