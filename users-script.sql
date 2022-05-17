CREATE DATABASE empregos_aqui;
USE empregos_aqui;

CREATE TABLE usuarios(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome_completo VARCHAR(80) NOT NULL,
cpf VARCHAR(14) NOT NULL UNIQUE KEY,
email VARCHAR(50) NOT NULL UNIQUE KEY,
telefone_cel VARCHAR(11) NOT NULL,
created_at DATETIME NOT NULL,
updated_at DATETIME NOT NULL
);

SELECT id, nome_completo, cpf, email, telefone_cel, created_at, updated_at
FROM usuarios;