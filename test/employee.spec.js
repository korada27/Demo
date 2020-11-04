let mock = require('mock-require');
mock('../models/employee.model','../models/employee-mock.model');

const chai = require('chai');
const chaiHttp = require('chai-http');
// const expect = require('chai').expect();
const expect = chai.expect;
const assert = chai.assert;
const should = require('chai').should();
const empService = require('../services/employee.service');
const server = require('../app');
chai.use(chaiHttp);
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im1hZGh1MUBnbWFpbC5jb20iLCJpYXQiOjE1NDM5MTY1MTksImV4cCI6MTU0MzkxNzQxOX0.ltrVp9uwMBI9zRQuGJYviKUpnVsOsCXxzE5AJEpTpQg";

//Unit Tests 
//Employee FUnctionality - Test Cases
describe("Employee Functionality", function () {
    // it('Get All Employees', function (done) {
    //     let req = {}
    //     // Have `res` have a send key with a function value coz we use `res.send()` in our func
    //     let res = {
    //       send: function() {}
    //     }
    //     // var a;
    //     // assert(empService.getAllEmployees().then(function(data){
    //     //     // console.log(data)
    //     //     data.should.have.property('statusCodse');
    //     //     done()
    //     // }));
    //     // done();
    //     // assert(empService.getAllEmployees(req,res).should.be.a('{}'));
    //     // expect(empService.getAllEmployees(req,res)).to.deep.equal({});
    //     chai.request(empService.getAllEmployees).get().end(function(err,res){
    //         res.should.have.status(200)
    //     })
    //     done();
    // });
    it('#Get All Employees', function (done) {
        chai.request(server)
            .get('/employee/getallemployees')
            // .set('token', token)
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    })


    it('#Add New Employee', function (done) {
   
        let request = {
            "FirstName" : "Test",
            "MiddleName" : "",
            "LastName" : "Test",
            "Gender" : "Male",
            "DateOfBirth" : "2018-01-01",
            "Email" : "test@gmail.com",
            "Phone" : "open position",
            "Designation" : "Tester",
            "City" : "VIZ",
            "State" : "AP",
            "Country" : "IN",
            "PostalCode" : 12345
        };
        chai.request(server)
            .post('/employee/addemployee')
            // .set('token', token)
            .send(request)
            .end(function (err, res) {
                // console.log("Posted")
                if(err){
                    console.log(err)
                }
                res.should.have.status(200);
                done();
            });
    })
})
