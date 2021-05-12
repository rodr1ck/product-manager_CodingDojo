const { Product } = require('../models/product.model')

module.exports.index = (request, response) => {
    response.json({
        message: 'Hello World',
    })
}

module.exports.createProduct = (request, response) => {
    const { tile, price, description } = request.body
    Product.create({
        tile,
        price,
        description
    })
        .then((product) => response.json({product, mensaje: "producto creado exitosamente"}))
        .catch((err) => response.json(err))
}
