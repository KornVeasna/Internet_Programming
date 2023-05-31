const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    username: Joi.string()
        .alphanum()
        .min(2)
        .max(20)
        .required(),
    firstname: Joi.string()
        .alphanum()
        .min(2)
        .max(15)
        .required(),
    lastname: Joi.string()
        .alphanum()
        .min(2)
        .max(15)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .min(8)
        .max(20)
        .required()

});
