// Joi register validation schema
import Joi from "joi";

const registerAuthSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.min": "Username must be at least 3 characters long",
    "string.max": "Username must be at most 30 characters long",
    "string.empty": "Username cannot be empty",
    "any.required": "Username is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email",
    "string.empty": "Email cannot be empty",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required",
  }),
  role: Joi.string().valid("admin", "user").optional().messages({
    "any.only": "Role must be either 'admin' or 'user'",
  }),
});

export default registerAuthSchema;