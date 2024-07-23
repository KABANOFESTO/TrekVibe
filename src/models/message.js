const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: String,
    response: String,
    language: String,
    sendSms: { type: Boolean, default: false },
    smsContent: { type: String, default: "" },
    smsResponse: { type: String, default: "" }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
