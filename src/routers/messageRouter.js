const express = require('express');
const Message = require('../models/message');
const router = express.Router();

// Function to update or create a message
async function upsertMessage(messageData) {
    try {
        const { sequence, text, response, language, sendSms, smsContent, smsResponse } = messageData;
        const result = await Message.findOneAndUpdate(
            { sequence: sequence },
            { text, response, language, sendSms, smsContent, smsResponse },
            { new: true, upsert: true, returnDocument: 'after' } // Return the updated document
        );

        // Check if the document was newly created
        const status = result._id ? (result.isNew ? 'inserted' : 'updated') : 'not modified';
        return { status, message: result };
    } catch (error) {
        console.error('Error upserting message:', error);
        throw error;
    }
}

router.post('/messages', async (req, res) => {
    try {
        const messages = req.body.messages;
        const upsertResults = await Promise.all(messages.map(message => upsertMessage(message)));

        const insertedMessages = upsertResults.filter(result => result.status === 'inserted');
        const updatedMessages = upsertResults.filter(result => result.status === 'updated');

        res.status(200).json({
            message: 'Messages processed successfully',
            inserted: insertedMessages,
            updated: updatedMessages
        });
    } catch (error) {
        console.error('Error processing messages:', error);
        res.status(500).json({ error: 'Error processing messages' });
    }
});

module.exports = router;
