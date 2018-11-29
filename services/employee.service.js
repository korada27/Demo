// const Promise = require('promise');
// const mariaConnection = require('../connection/dbConnection');
var HTTP_CODES = require('../util/statusCodes');
const employeeModel = require('../models/employee.model');


//Get All Employees Data Service
var getAllEmployees = async (req, res, next) => {

    try {
        let empData = await employeeModel.Employee.findAll();
        res.status(HTTP_CODES.OK).send({
            "statusCode": HTTP_CODES.OK,
            "info": "List of Employees",
            "employees": empData
        })
    }
    catch (e) {
        res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({
            "statusCode": HTTP_CODES.INTERNAL_SERVER_ERROR,
            "info": "List of Employees",
            "error": e
        })
    }
}

//Add Employee Data Service
var addEmployee = async (req, res, next) => {

    try {
        let requestPayload = req.body;
        if (requestPayload != undefined) {
            let empData = await employeeModel.Employee.create(requestPayload);
            res.status(HTTP_CODES.OK).send({
                "statusCode": HTTP_CODES.OK,
                "info": "Successfully Created Employee Data",
                "employees": empData
            })
        }
    }
    catch (e) {
        res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({
            "statusCode": HTTP_CODES.INTERNAL_SERVER_ERROR,
            "info": "List of Employees",
            "error": e
        })
    }
}

/*
Exporting particular functionality To other Place
where this function is required
*/
module.exports = {
    getAllEmployees: getAllEmployees,
    addEmployee: addEmployee
};
