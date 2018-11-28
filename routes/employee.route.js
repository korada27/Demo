const express = require('express');
const router = express.Router();
const employeeServices = require('../services/employee.service');
const expressJoi = require('express-joi-validator');
const requestSchema = require('../schemas/employee.schema');

//API EndPoints for Employee Functionality
router.get('/getallemployees', employeeServices.getAllEmployees);
router.post('/addemployee', expressJoi(requestSchema.addEmployeeSchema), employeeServices.addEmployee);


module.exports = router;
