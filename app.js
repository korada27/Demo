var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeeRouter = require('./routes/employee.route');
var dbconnectioninfo = require('./connection/dbConnection');
var HTTP_CODES = require('./config/statusCodes');
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
  
  if (err.name == "SequelizeDatabaseError") {
    console.log("Invalid Column Name")
    res.status(HTTP_CODES.NOT_FOUND)
      .send(err);
  }
  else if (err.name == "SequelizeAccessDeniedError") {
    console.log("Invalid Password")
    res.status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send(err);
  }
  else if (err.Status == 404) {
    var errorMessage = {
      "Status": parseInt(err.Status),
      "Info": err.Info
    };
    res.status(404).json(errorMessage);
  }
  else {
    res.status(HTTP_CODES.NOT_FOUND)
      .send(err);
  }
});

module.exports = app;
