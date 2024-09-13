let express = require('express')
let bodyParser = require('body-parser')
let router = require('./routes/routes')

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/",router);

const port = 3333
app.listen(port, () => {
  console.log(`Server running!! ${port}`)
})