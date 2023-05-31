const users = require('../models/users')

const login = async (param) => {
    const {email, password } = param;
    try {
        this.email = email;
        //check email then check password and give difference
        var existed = await users.findOne({email})
        if(!existed){
            throw "Email is incorrected."
        } 
        else if(existed.password != password){
            throw "Password is incorrected."
        }
        return {
            success: true,
            data: existed
        }
    } catch (err) {
        return {
            success: false,
            err: err
        }
    }
}

module.exports = {
    login
}