// const sequelize = require('sequelize');
// var mariaConnection = require('../connection/dbConnection');
let sqlConnection;
let SequelizeMock = require('sequelize-mock');
sqlConnection = new SequelizeMock();
//Model Schemaa for Employee Table
let Employee = sqlConnection.define('employee', {
    Id: 1,
    FirstName: "Test",
    MiddleName: "Test",
    LastName: "Test",
    Gender: "Male",
    DateOfBirth: "2018-01-01",
    Email: "test@gmail.com",
    Phone: "9999999999",
    Designation: "Tester",
    // Project: sequelize.STRING,
    // Module: sequelize.STRING,
    City: "Vizag",
    State: "AP",
    Country: "IN",
    PostalCode: "530000",
    IsDeleted: 0
}, {
        timestamps: false,
        freezeTableName: true, // Model tableName will be the same as the model name
        tableName: 'employee'
    });



module.exports = {

    Employee: Employee

};