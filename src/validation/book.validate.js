const Joi = require("joi");

class BookValidation {
    createDataValidate (data) {
        const schema = Joi.object({
            name: Joi.string().min(2).required(),
            photo: Joi.string().required(),
            price: Joi.number().required(),
            genres: Joi.array().items(Joi.number().integer().min(0)).min(1).required(),
            authors: Joi.array().items(Joi.number().integer().min(0)).required(),
        });
        return schema.validate(data)
    }
    updateDataValidate (data) {
        const schema = Joi.object({
            name: Joi.string().min(2).optional(),
            photo: Joi.string().optional(),
            price: Joi.number().optional(),
            genres: Joi.array().items(Joi.number().integer().min(0)).min(1).optional(),
            authors: Joi.array().items(Joi.number().integer().min(0)).optional(),
        });
        return schema.validate(data)
    }
};

const bookValidation = new BookValidation();
module.exports = bookValidation