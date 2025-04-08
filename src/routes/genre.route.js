const { Router } = require("express");
const genreController = require("../controllers/genre.controller");

class GenreRoute {
    constructor() {
        this.route = Router();
        this.initData()
    }

    initData() {
        this.route.get("/", genreController.getData);
        this.route.get("/:id", genreController.getDataById);
        this.route.post("/", genreController.createData);
        this.route.patch("/:id", genreController.updateData);
        this.route.delete("/:id", genreController.deleteData);
    }
};

const genreRoute = new GenreRoute()
module.exports = genreRoute;