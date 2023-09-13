const express = require('express')
const path = require('path')
const router = express.Router()
const productController = require('../controller/product')

const products = []
router.get('/add-product', productController.getAddProduct)

router.post('/product', (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router