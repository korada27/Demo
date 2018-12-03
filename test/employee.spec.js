const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect();
// const assert = chai.assert;
const should = require('chai').should();
const empService = require('../services/employee.service');
const server = require('../app');
chai.use(chaiHttp);
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im1hZGh1MUBnbWFpbC5jb20iLCJpYXQiOjE1NDM4NjIyNDUsImV4cCI6MTU0Mzg2MzE0NX0.2ZiIhPUmh6nrVhCIkgK8Le1yIS3M8fBwUekrYQ8YL1Y";

//Unit Tests 
//Employee FUnctionality - Test Cases
describe("Employee Functionality", function () {
    // it('Get All Employees', function (done) {
    //     var a;
    //     // assert(empService.getAllEmployees().then(function(data){
    //     //     // console.log(data)
    //     //     data.should.have.property('statusCodse');
    //     //     done()
    //     // }));
    //     // done();
    //     assert(empService.getAllEmployees().should.be.a('object'));
    // });
    it('#Get All Employees', function (done) {
        chai.request(server)
            .get('/employee/getallemployees')
            .set('token', token)
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    })
})
