const Joi = require("joi");

class GenreValidation {
    createDataValidate(data) {
        const schema = Joi.object({
            name: Joi.string().min(2).required(),
        });
        return schema.validate(data);
    }

    updateDataValidate(data) {
        const schema = Joi.object({
            name: Joi.string().min(2).optional(),
        });
        return schema.validate(data);
    }
};

const genreValidation = new GenreValidation();
module.exports = genreValidation;