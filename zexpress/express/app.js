const express = require('express')
const bodyParser = require('body-parser')
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const User = require('./model/user')
const Product = require('./model/product')
const Cart = require('./model/cart')
const CartItem = require('./model/cart-item')

const errorController = require('../controller/index')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin', adminRoute)
app.use(shopRoute)

app.use(errorController.get404)

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product)
User.hasOne(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product, {through: CartItem})
Product.belongsToMany(Cart, {through: CartItem})

app.listen(3000)