//for use route
var express = require('express');
var router = express.Router();

const { login } = require('../service/login');
const { register } = require('../service/register')
const { joiValidation } = require('../middleware/joiValidation');
const { loginSchema, registerSchema } = require('../schemas/index')

//login page
router.post('/login', joiValidation(loginSchema) ,async function(req,res,next) {
    const param = JSON.parse(req.body);
    const {email, password} = param;
    const result = await login(email, password);
    res.json(result);
});
//register page
router.post('/register', joiValidation(registerSchema), async function(req,res,next) {
    const param = JSON.parse(req.body);
    const result = await register(param);
    res.json(result);
});

module.exports = router;