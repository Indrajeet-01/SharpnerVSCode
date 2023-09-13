const express = require('express')
const bodyParser = require('body-parser')
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const errorController = require('../controller/index')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin', adminRoute)
app.use(shopRoute)

app.use(errorController.get404)

app.listen(3000)