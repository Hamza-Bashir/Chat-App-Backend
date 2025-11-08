const joi = require("joi")

const groupAddSchema = joi.object({
    groupName : joi.string().required().messages({
        "string.base" : "Group Name must be string",
        "any.required" : "Group Name is required",
        "string.empty" : "Group Name cannot be empty"
    })
})


module.exports = {groupAddSchema}