var fs = require('fs');

const addNewUser = async (newUser) => {
  let localData = await readUserData();
  if (!localData) writeUserData([newUser]);
  else writeUserData([...localData, newUser]);
}

const getAllUsers = async () => {
  return await readUserData();
}

const writeUserData = (data) => {
  fs.writeFile('db/data.json', JSON.stringify(data), 'utf8', (err) => {
    console.log("saving error: ", err);
  });
}

const readUserData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('db/data.json', 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }

      return resolve(JSON.parse(data));
    });
  })

}

module.exports = {
  writeUserData,
  readUserData,
  addNewUser,
  getAllUsers
}