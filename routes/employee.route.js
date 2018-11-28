const express = require('express');
const router = express.Router();
const employeeServices = require('../services/employee.service');

//API EndPoints for Employee Functionality
router.get('/get-all-employees', employeeServices.getAllEmployees);


module.exports = router;
