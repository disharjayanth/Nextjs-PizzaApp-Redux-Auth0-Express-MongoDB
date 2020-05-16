const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pizzaSchema = new Schema({
    name: String,
    idName: String,
    shortDesc: String,
    fullDesc: String,
    price: Number,
    pod: Boolean,
    image: String
})

module.exports = mongoose.model('Pizza', pizzaSchema)