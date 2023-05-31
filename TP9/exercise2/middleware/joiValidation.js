const { json } = require("express");

const joiValidation = (schema) => {
    return async (req, res, next) => {
        const param = JSON.parse(req.body);
        try{
            const body = param;
            await schema.validateAsync(body);
        }catch(err){
            return res.json({
                success: false,
                err: err
            })
        }
        next();
    }
}

module.exports = {
    joiValidation
}