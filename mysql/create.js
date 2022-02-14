const db = require('../config/database.js')

let createQueryStore = `
CREATE TABLE IF NOT EXISTS store (
    id INT NOT NULL AUTO_INCREMENT,
    quantity INT(10) NULL DEFAULT NULL,
    shipdate DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    status VARCHAR(255),
    petId INT(10) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (petId) references pet(id)
)
COLLATE='utf8mb4_general_ci'
;
`

db.query(createQueryStore, function (error, results, fields) {
    if (error) throw error;
    console.log('Table has been created');
});

let createQueryPet = `
CREATE TABLE IF NOT EXISTS pet (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NULL DEFAULT NULL,
    createAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    status VARCHAR(255),
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`

db.query(createQueryPet, function (error, results, fields) {
    if (error) throw error;
    console.log('Table has been created');
});

let createQueryUser = `
CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NULL DEFAULT NULL,
    email VARCHAR(100) NULL,
    password VARCHAR(100) NULL,
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`

db.query(createQueryUser, function (error, results, fields) {
    if (error) throw error;
    console.log('Table has been created');
});

let alterQuery = "ALTER TABLE `store` MODIFY COLUMN quantity INT (10) DEFAULT NULL";

db.query(alterQuery, function (error, results, fields) {
    if (error) throw error;
    console.log('Table has been altered ');
});
