const express = require('express');
const router = express.Router();
const { messageSchema } = require('../support/validation');
const Message = require('../models/message');
const passport = require('passport')
require('../middleware/passport');

router.post("/setMessage", async (req, res) => {
    try {
        const valationResult = await messageSchema.validateAsync(req.body);
        const message = new Message({
            name: valationResult.name,
            email: valationResult.email,
            message: valationResult.message
        })
        message.save()
            .then(res => {
                res.status(200).json({ message: 'message sent successful' })
            })
    } catch (error) {

    }
})

module.exports = router;


