const express = require('express');
const Message = require('../models/message');
const { messageSchema } = require('../support/validation')
const router = express.Router();

router.post('/messages', async (req, res) => {
    try {
        const messages = req.body.messages;
        await Message.insertMany(messages);
        res.status(200).json({ message: 'Messages inserted successfully' });
    } catch (error) {
        console.error('Error inserting messages:', error);
        res.status(500).json({ error: 'Error inserting messages' });
    }
});

module.exports = router

