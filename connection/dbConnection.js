const sequelize = require('sequelize');
const config=require('../config/dbConfig.json');
const Op = sequelize.Op;

//Database Initialization using Sequalize (ORM)
var connection = new sequelize(config.mariaDB.db, config.mariaDB.username, config.mariaDB.password, {
  host: config.mariaDB.host,
  port: config.mariaDB.port,
  dialect: config.mariaDB.dialect,
  operatorsAliases: Op, // use Sequelize.Op.
  logging: false,
  pool: {
    max: 30,
    min: 0,
    idle: 10000
  }
});

connection.authenticate()
  .then(function () {
    console.log("MariaDB Connection Established");
  })
  .catch(function (err) {
    console.log("Error Connecting to Database" + JSON.stringify(err));
  })
  .done();

module.exports = connection;