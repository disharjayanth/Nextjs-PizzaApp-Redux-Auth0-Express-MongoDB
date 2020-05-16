const mongoose = require('mongoose')
const Schema = mongoose.Schema

const siteSchema = new Schema({
    name: String,
    phone: String,
    address: String,
    email: String
})

module.exports = mongoose.model('Site', siteSchema)