const express = require('express')
const path = require('path')
const router = express.Router()

const productController = require('../controller/product')


router.get('/', productController.getProducts)

module.exports = router