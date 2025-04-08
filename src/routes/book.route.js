const { Router } = require("express");
const bookController = require("../controllers/book.controller");

class BookRoute {
    constructor() {
        this.route = Router();
        this.initRoutes()
    };

    initRoutes() {
        this.route.get("/", bookController.getData);
        this.route.get("/:id", bookController.getDataById);
        this.route.post("/", bookController.createData);
        this.route.patch("/:id", bookController.updateData);
        this.route.delete("/:id", bookController.deleteData);
    }
};

const bookRoute = new BookRoute().route;
module.exports = bookRoute;