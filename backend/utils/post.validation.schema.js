// Joi post validation schema
import Joi from "joi";

const postSchema = Joi.object({
      title: Joi.string().min(3).max(100).required(),
      content: Joi.string().min(10).required(),
      images: Joi.string()
});

export default postSchema;