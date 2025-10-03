const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const chatModel = mongoose.model('chat', chatSchema);
module.exports = chatModel;