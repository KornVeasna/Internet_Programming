
var db = require("../db/db");

const login = (email, password) => {
  // to check in db if the user is existed
  return new Promise((resolve, rejects) => {
    db.getAllUsers().then((res) => {
      for (let user of res) {
        if (user.email === email && user.password === password) {
          resolve(true);
          return;
        }
      }
      resolve(false);
    });
  });
};

const register = (newUser) => {
  // check email duplication
  // check data validation
  // save to database
  // to check in db if the user is existed
  return new Promise((resolve, rejects) => {
    let bool=true;
    db.getAllUsers().then((res) => {
      for (let user of res) {
        if (user.email == newUser.email) {
          // console.log(11111);
          resolve(false);
          bool=false;
          break;
        }
      }
      resolve(true);
    }).then(()=>{
      // console.log(bool);
      if(bool){
        db.addNewUser(newUser);
      }
    });
  });
};

module.exports = {
  login,
  register,
};
