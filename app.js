var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeeRouter = require('./routes/employee.route');
var dbconnectioninfo = require('./connection/dbConnection');
var HTTP_CODES = require('./util/statusCodes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employee', employeeRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.Status = 404;
  err.Info = "Route Not Found"
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  //Joi Validation - Error Handling
  if (err.isBoom) {
    var error = {
      "statusCode": 400,
      "info": "Check Request Payload",
      "error": err.data[0].message.replace(/\"/g, '')
    };
    res.status(400).send(error);

  }
  //Error Handling other than Joi Validations
  else {
    //Invalid Database column Error / Field not Defined Error 
    if (err.name == "SequelizeDatabaseError") {
      console.log("Invalid Column Name");
      var errorMessage = {
        "statusCode": 404,
        "info": "Invalid Column Name / Check DB Columns",
        "error": err
      };
      res.status(404).send(errorMessage);
    }
    //DB Credentials Error
    else if (err.name == "SequelizeAccessDeniedError") {
      console.log("Invalid Password")
      var errorMessage = {
        "status": 500,
        "info": "DB Credentials Error",
        "error": err
      };
      res.status(500).send(errorMessage);
    }
    //404 Error
    else if (err.statusCode == 404) {
      var errorMessage = {
        "statusCode": parseInt(err.statusCode),
        "error": err
      };
      res.status(404).json(errorMessage);
    }
    //400 Error
    else if (err.statusCode == 400) {
      var errorMessage = {
        "statusCode": parseInt(err.statusCode),
        "info": "Bad Request",
        "error": err
      };
      res.status(400).json(errorMessage);
    }
    //500 Error
    else {
      res.status(500).send(err);
    }
  }

});

module.exports = app;
