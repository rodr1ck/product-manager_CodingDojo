const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'title is required'],
            minlength: [3, 'title must be at least 5 characters long'],
        },
        price: {
            type: String,
            required: [true, 'title is required'],
        },
        description: {
            type: String,
            required: [true, 'title is required'],
        },
    },
    { timestamps: true },
)
module.exports.Product = mongoose.model('Product', ProductSchema)

/* const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, 'setup is required'],
            minlength: [10, 'setup must be at least 10 characters long'],
        },
        punchline: {
            type: String,
            required: [true, 'punchline is required'],
            minlength: [3, 'punchline must be at least 3 characters long'],
        },
    },
    { timestamps: true },
)

const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke */
