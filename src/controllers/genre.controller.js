const genreService = require("../services/genre.service");
const genreValidation = require("../validation/genre.validate");

class GenreController {
    async getData (req, res) {
        try {
            const data = await genreService.getData()
            if(data.status && data.status !== 200) {
                return res.status(data.status).send({message: data.message});
            };
            return res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error.message)
            console.log(error);
        }
    };

    async getDataById (req, res) {
        try {
            const data = await genreService.getDataById(req.params.id);
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
            const { error, value } = genreValidation.createDataValidate(req.body);
            if (error) {
                return res.status(422).send(error.details[0].message);
            }
            const data = await genreService.createData(value);
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
            const { error, value } = genreValidation.updateDataValidate(req.body);
            if (error) {
                return res.status(422).send(error.details[0].message);
            }
            const data = await genreService.updateData(req.params.id, value);
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
            const data = await genreService.deleteData(req.params.id);
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

const genreController = new GenreController();
module.exports = genreController;