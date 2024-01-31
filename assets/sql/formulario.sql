CREATE DATABASE formulario;

USE formulario;

CREATE TABLE interessado (
    id_interessado INTEGER IDENTITY(1,1),
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL, 
    description VARCHAR(200) NOT NULL,
    CONSTRAINT pk_interessado PRIMARY KEY (id_interessado)
);

SELECT * FROM interessado;
DELETE FROM interessado;

