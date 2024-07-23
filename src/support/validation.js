// import joi from 'joi';
const joi = require('joi');

const loginUserSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().min(6).required()
});
const messageSchema=joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    message:joi.string().min(6).required(),
})

module.exports = {
    loginUserSchema,messageSchema
}