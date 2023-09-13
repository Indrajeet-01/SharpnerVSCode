const Product = require('../model/product')

exports.getAddProduct = (req,res) => {
    res.render('add-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
  
}

exports.getProducts = (req,res) => {
    const products = Product.fetchAll()
   
    res.render('shop',{
        prods: products,
        pageTitle:'shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS:true
    })
}