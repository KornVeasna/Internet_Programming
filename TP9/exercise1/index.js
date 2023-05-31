var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
const port = 3001;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

require('./config/db')()
app.use(require('./routes'));

app.listen(port, () => console.log("App on http://localhost:3001"));
