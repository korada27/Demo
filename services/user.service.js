var statusCode = require('../util/statusCodes');
const userModel = require('../models/user.model');
const Bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;
const uuidv1 = require('uuid/v1');
const jwt = require('jsonwebtoken');

//Add User Data Service - Registration
var addUser = async (req, res, next) => {

    try {
        let requestPayload = req.body;

        if (requestPayload != undefined && requestPayload != null) {

            Bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
                if (err) {
                    next({
                        "statusCode": statusCode.INTERNAL_SERVER_ERROR,
                        "info": "Internal Server Error",
                        "error": err.stack
                    });
                }
                Bcrypt.hash(requestPayload.Password, salt, async function (err, hash) {
                    if (err) {
                        next(err);
                    }
                    else {
                        try {
                            requestPayload.UserUID = uuidv1();
                            requestPayload.IsDeleted = 0;
                            requestPayload.Password = hash;
                            let userData = await userModel.User.create(requestPayload);
                            if (userData) {
                                res.send(userData)
                            }
                            else {
                                res.send({
                                    "statusCode": statusCode.BAD_REQUEST,
                                    "info": "Cannot register User Data",
                                    "error": []
                                })
                            }
                        }
                        catch (e) {
                            next(e)
                        }
                    }
                })
            })
        }
    }
    catch (e) {
        next(e);
    }
}


//Login API 
var login = async (req, res, next) => {

    try {
        var userData = await userModel.User.findOne({
            where: {
                Email: req.body.EmailId
            }
        });
        if (userData) {
            Bcrypt.compare(req.body.Password, userData.Password, async function (err, isMatch) {
                if (err) {
                    next(err)
                }
                if (isMatch) {
                    var token = await jwt.sign({ Email: userData.Email }, "SECRET_KEY", { expiresIn: '900s' });

                    res.status(statusCode.OK).send({
                        "statusCode": statusCode.OK,
                        "info": "Login Successful",
                        "user": {
                            "email": userData.Email,
                            "token": token
                        }
                    })
                }
                else {
                    next({
                        "statusCode": statusCode.BAD_REQUEST,
                        "error": "Password Doesn't Match",
                    })
                }
            })
        }
        else {
            next({
                "statusCode": statusCode.BAD_REQUEST,
                "error": "User Email Not Found",
            })
        }
    }
    catch (e) {
        next(e);//Send Database Error to app.js to Error Handler Middleware
    }
}



/*
Exporting particular functionality To other Place
where this function is required
*/
module.exports = {
    login: login,
    addUser: addUser
};
