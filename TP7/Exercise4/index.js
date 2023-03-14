const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static('src/'));

app.get('/', (req, res) => {
  fs.readFile('./src/index.html', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('The server is running on http://localhost:3000');
});