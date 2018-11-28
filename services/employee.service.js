// const Promise = require('promise');
// const mariaConnection = require('../connection/dbConnection');
const employeeModel = require('../models/employee.model');


//Get All Employees Data Service
var getAllEmployees = async  (req, res, next) => {

    try {
        let empData = await employeeModel.Employee.findAll();
        res.send(empData)
    }
    catch (e) {
        res.send("Error : ", e)
    }
}

/*
Exporting particular functionality To other Place
where this function is required
*/
module.exports = {
    getAllEmployees: getAllEmployees
};
