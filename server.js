const express = require('express')
const bodyParser = require('body-parser')

const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

let PORT = process.env.PORT || 8080

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT)
console.log ("App listening on PORT: "+ PORT);
