const express = require('express');
const router = express.Router();
const userServices = require('../services/user.service');
const expressJoi = require('express-joi-validator');
const requestSchema = require('../schemas/user.schema');

//API EndPoints for User Functionality
router.post('/register', expressJoi(requestSchema.addUserSchema), userServices.addUser);
router.post('/login', userServices.login);

module.exports = router;
