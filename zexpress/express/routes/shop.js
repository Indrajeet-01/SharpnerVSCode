const express = require('express')
const { route } = require('./admin')

const router = express.Router()

router.get('/', (req,res,next) => {
    res.send('<h1> hellow from shop</h1>')
})

module.exports = router