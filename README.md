# nodejs-with-mysql-training
Node.JS Basic Application which covers the concepts : 

<b>1. Express Folder Structure Generation : </b>
- Generating Folder Structure using the following commands 
    - npm install -g express
    - npm install -g express-generator

<b>2. Separating/Segregate the Folder Structure to maintain MVC pattern like :</b>
- All endpoints to maintained in /routes/
- All Database Coonectivity to maintained in /connection/
- All Application Business Logic to maintained in /services/
- All Database Design Model to maintained in /models/
- All Request Payload Validations to maintained in /schemas/
- All Secret/Credentials info to maintained in /config/
- All Test Cases to maintained in /test/
- All util level code to maintained in /util/
- All Front End pages to maintained in /public/
- All user level middleware to maintained in /middlewares/ .........etc

<b>3. Usage of Sequelize ORM </b>
- Follow this link - http://docs.sequelizejs.com

<b>4. Usage of Async Await</b>

<b>5. Basic CRUD Operations - Employee Functionality </b>
- CREATE,READALL,READ,UPDATE,DELETE(Soft Delete)

<b>6. JOI Validations :</b>
- npm pacakges used are : 
    - joi 
    - express-joi-validator

<b>7. Error/Exception Handling:  </b>
- using try/catch 
- using status codes and Error handler middleware

<b>8. Usage of Array functions</b>
- Example :  <code>
var a =>(){
}
</code>

<b>9. Hashing plain Text passwords</b>
- Hashing done using bcryptjs npm package.
- hashing done using Salt rounds

<b>10. JWT </b>
- JSON Web Tokens 
- "jsonwebtoken" npm package
- Verification of JSON Web Tokens in separate middleware

<b>11. Loggers : </b>
- Logs at Console,File with different levels (info,debug,error...etc)
- "winston" npm package

<b>12. Basic CRUD Operations - User Management</b>
- API to register user data in which the password should be hashed(encrypted) and store in database
- API to login in which on successfull login it gives a JWT token of certain expiration time
- Securing previous Employee CRUD operation (all API's) using this JWT middleware in app.js base path.