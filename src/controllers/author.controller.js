const authorService = require("../services/author.service");
const authorValidation = require("../validation/author.validate");

class AuthorController {
    async getData (req, res) {
        try {
            const data = await authorService.getData()
            if(data.status && data.status !== 200) {
                return res.status(data.status).send({message: data.message});
            };
            return res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error.message)
            console.log(error);
        }
    };

    async getDataById (req, res) {
        try {
            const data = await authorService.getDataById(req.params.id);
            if(data.status && data.status !== 200) {
                return res.status(data.status).send({message: data.message});
            };
            return res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error.message)
            console.log(error);
        }
    };

    async createData (req, res) {
        try {
            const { error, value } = authorValidation.createDataValidate(req.body);
            if (error) {
                return res.status(422).send(error.details[0].message);
            }
            const data = await authorService.createData(value);
            if(data.status && data.status !== 200) {
                return res.status(data.status).send({message: data.message});
            };
            return res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error.message)
            console.log(error);
        }
    };

    async updateData (req, res) {
        try {
            const { error, value } = authorValidation.updateDataValidate(req.body);
            if (error) {
                return res.status(422).send(error.details[0].message);
            }
            const data = await authorService.updateData(req.params.id, value);
            if(data.status && data.status !== 200) {
                return res.status(data.status).send({message: data.message});
            };
            return res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error.message)
            console.log(error);
        }
    };

    async deleteData (req, res) {
        try {
            const data = await authorService.deleteData(req.params.id);
            if(data.status && data.status !== 200) {
                return res.status(data.status).send({message: data.message});
            };
            return res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error.message)
            console.log(error);
        }
    }
};

const authorController = new AuthorController();
module.exports = authorController;