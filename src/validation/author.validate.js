const Joi = require("joi");

class AuthorValidation {
    createDataValidate(data) {
        const schema = Joi.object({
            name: Joi.string().min(2).required(),
            year: Joi.number().integer().min(1900).max(2100).required(),
        });
        return schema.validate(data);
    }

    updateDataValidate(data) {
        const schema = Joi.object({
            name: Joi.string().min(2).optional(),
            year: Joi.number().integer().min(1900).max(2100).optional(),
        });
        return schema.validate(data);
    }
};

const authorValidation = new AuthorValidation();
module.exports = authorValidation;