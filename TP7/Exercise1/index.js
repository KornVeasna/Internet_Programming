
const express = require('express')
const fs = require('fs');

const app = express()

app.get('/', function (req, res) {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.send("There is a server error");
    }
    res.send(data);
  });
})

app.listen(3000, () => {
  console.log("The server is running on http://localhost:3000");
})