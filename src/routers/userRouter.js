const express = require("express");
const { loginUserSchema } = require('../support/validation');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const dotenv = require("dotenv");
// dotenv.config();
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const validationResult = await loginUserSchema.validateAsync(req.body);
        const { email, password } = validationResult
        const user = await User.findOne({ email })
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                "success": true, user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    token: generateToken(user)
                }
            })
        } else res.json({ "success": false, message: "Invalid credatials,please make it clear!" })
    } catch (error) {
        res.json({ "success": false, message: error }).status(400)
    }

    const generateToken = (id) => {
        return jwt.sign({ id }, "my-token-secret", { expiresIn: '30d' })
    }
})

module.exports = router