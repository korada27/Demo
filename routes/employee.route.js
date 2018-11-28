const express = require('express');
const router = express.Router();
const employeeServices = require('../services/employee.service');

//API EndPoints for Employee Functionality
router.get('/getallemployees', employeeServices.getAllEmployees);
router.get('/addemployee', employeeServices.addEmployee);


module.exports = router;
