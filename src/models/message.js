const { response } = require('express');
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: String,
    response: String,
    language: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;