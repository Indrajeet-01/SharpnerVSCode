const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))



app.use('/add-product', (req,res,next) => {
    console.log('<form action="/product" method="POST"><input type="text" name="title"></input></form>')
    res.send('<h1>  add product </h1>')
})

app.use('/product', (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

app.listen(3000)