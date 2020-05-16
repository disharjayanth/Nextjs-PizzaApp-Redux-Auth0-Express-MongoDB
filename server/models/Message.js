const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messagesSchema = new Schema({
    name: String,
    email: String,
    message: String
})

module.exports = mongoose.model('Messages', messagesSchema)
