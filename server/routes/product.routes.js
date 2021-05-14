const ProductController = require('../controllers/product.controller')

module.exports = function (app) {
    app.get('/api', ProductController.index)
    //app.post('/api/people', PersonController.createPerson)
    app.post('/api/new-product', ProductController.createProduct)
    app.get('/api/products/:id', ProductController.getProduct);
    app.get('/api/products', ProductController.getAllProducts);
}

/* module.exports = (app) => {
    app.get('/api/jokes/random', JokeController.findRandomJoke)
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke)
    app.get('/api/jokes', JokeController.findAllJokes)
    app.put('/api/jokes/update/:id', JokeController.updateExistingJoke)
    app.post('/api/jokes/new', JokeController.createNewJoke)
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke)
} */
