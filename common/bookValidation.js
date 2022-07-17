import Joi from "joi";

//validate the data
const bookValidation = (data) => {
  const bookSchema = Joi.object({
    book_article: Joi.string().required(),
    book_type: Joi.string().required(),
    unit_price: Joi.string().required(),
    in_stock: Joi.string().required(),
    book_author: Joi.string().required(),
  });
  return bookSchema.validate(data);
};
export default bookValidation;
