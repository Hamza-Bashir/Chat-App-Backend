const Joi = require("joi");

const addOrgSchema = Joi.object({
  organizationName: Joi.string().trim().required().messages({
    "string.base": "Organization name must be a string",
    "string.empty": "Organization name cannot be empty",
    "any.required": "Organization name is required",
  }),

  organizationEmail: Joi.string().trim().email().required().messages({
    "string.base": "Organization email must be a string",
    "string.empty": "Organization email cannot be empty",
    "string.email": "Organization email must be a valid email address",
    "any.required": "Organization email is required",
  }),

  organizationPhone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be 10–15 digits only",
      "string.empty": "Phone number cannot be empty",
      "any.required": "Phone number is required",
    }),

  industry: Joi.string().trim().required().messages({
    "string.base": "Industry must be a string",
    "string.empty": "Industry cannot be empty",
    "any.required": "Industry is required",
  }),
});

module.exports = { addOrgSchema };
