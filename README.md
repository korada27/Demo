# nodejs-with-mysql-training
Node.JS Basic Application which covers the concepts : 

1. Express Folder Structure Generation : 
- Generating Folder Structure using the following commands 
    - npm install -g express
    - npm install -g express-generator

2. Separating/Segregate the Folder Structure to maintain MVC pattern like :
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

3. Usage of Sequelize ORM 
- Follow this link - http://docs.sequelizejs.com

4. Usage of Async Await

5. Basic CRUD Operations - Employee Functionality 
- CREATE,READALL,READ,UPDATE,DELETE(Soft Delete)

6. JOI Validations :
- npm pacakges used are : 
    - joi 
    - express-joi-validator