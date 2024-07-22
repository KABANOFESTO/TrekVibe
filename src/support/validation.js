// import joi from 'joi';
const joi = require('joi');

const loginUserSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().min(6).required()
});

module.exports = {
    loginUserSchema
}