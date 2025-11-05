const joi = require("joi")

const adminRegisterSchema = joi.object({
    name:joi.string().required().messages({
        "string.base" : "Name must be string",
        "any.required":"Name is required"
    }),
    email:joi.string().email().required().messages({
        "string.base":"Email must be string",
        "any.required":"Email is required",
        "string.email":"Email must be valid 'email'"
    }),
    password:joi.string().min(5).max(20).required().messages({
        "string.base":"Password must be string",
        "string.min":"Password must be greater than 5 digit",
        "string.max":"Password must be less than 20 digit",
        "any.required":"Password is required"
    }),
    role:joi.string().valid("admin","employee").messages({
        "string.base":"Role must be string",
        "any.only":"Role either 'admin' or 'employee'"
    })
})


const adminLoginSchema = joi.object({
    email:joi.string().email().required().messages({
        "string.base":"Email must be string",
        "any.required":"Email is required",
        "string.email":"Email must be valid 'email'"
    }),
    password:joi.string().min(5).max(20).required().messages({
        "string.base":"Password must be string",
        "string.min":"Password must be greater than 5 digit",
        "string.max":"Password must be less than 20 digit",
        "any.required":"Password is required"
    })
})


module.exports = {adminRegisterSchema, adminLoginSchema}