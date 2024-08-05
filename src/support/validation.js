// import joi from 'joi';
const joi = require('joi');

const createUserSchema = joi.object({
    username: joi.string().min(4),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    confirm_password: joi.ref('password'),
})

const loginUserSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().min(6).required()
});
const messageSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    message: joi.string().min(6).required(),
})

module.exports = {
    loginUserSchema, messageSchema,createUserSchema
}