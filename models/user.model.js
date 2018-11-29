const sequelize = require('sequelize');
var mariaConnection = require('../connection/dbConnection');

//Model Schemaa for User Table
let User = mariaConnection.define('users', {
    Id: { type: sequelize.BIGINT, autoIncrement: true, primaryKey: true },
    UserUID: sequelize.STRING,
    FirstName: sequelize.STRING,
    LastName: sequelize.STRING,
    Email: sequelize.STRING,
    Password: sequelize.STRING,
    IsDeleted: sequelize.INTEGER
}, {
        timestamps: false,
        freezeTableName: true, // Model tableName will be the same as the model name
        tableName: 'users'
    });

module.exports = {

    User: User

};