CREATE DATABASE IF NOT EXISTES
    dockerdb;
USE dockerdb;

CREATE TABLE IF NOT EXISTES products (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY KEY (id)
);

INSERT INTO products VALUE(0, 'Cabo Fibra', 2500);
INSERT INTO products VALUE(0, 'Cabo Energia', 900);