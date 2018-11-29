const Joi = require('joi');

var addUserSchema = {
    body: {
        FirstName: Joi.string().required(),
        LastName: Joi.string().required(),
        Email: Joi.string().email({ minDomainAtoms: 2 }),
        Password : Joi.string().required()
    }
};

module.exports = {
    addUserSchema: addUserSchema
}