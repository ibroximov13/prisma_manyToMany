const bookService = require("../services/book.service");
const bookValidation = require("../validation/book.validate");

class BookController {
    async getData(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const take = parseInt(req.query.take) || 10;
            const skip = ( page - 1) * take;
            const contains = req.query.contains?.trim();
            const order = req.query.order === "desc" ? "desc" : "asc";
            const allowedColumns = ["id", "name"];
            const column = allowedColumns.includes(req.query.column) ? req.query.column : "id"; 

            let where = {};
            if (contains) {
                where.name = {
                  contains,
                  mode: 'insensitive'
                };
            }
            const data = await bookService.getData(take, skip, order, column, where)
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
            const data = await bookService.getDataById(req.params.id);
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
            const { error, value } = bookValidation.createDataValidate(req.body);
            if (error) {
                return res.status(422).send(error.details[0].message);
            }
            const data = await bookService.createData(value);
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
            const { error, value } = bookValidation.updateDataValidate(req.body);
            if (error) {
                return res.status(422).send(error.details[0].message);
            }
            const data = await bookService.updateData(req.params.id, value);
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
            const data = await bookService.deleteData(req.params.id);
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

const bookController = new BookController();
module.exports = bookController;