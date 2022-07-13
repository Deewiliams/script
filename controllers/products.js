const Product = require('../models/products')

const createProduct = async (req,res) => {
    const product =  await Product.create( req.body)
    res.status(201).json({product})
}

module.exports = {
    createProduct
    
}