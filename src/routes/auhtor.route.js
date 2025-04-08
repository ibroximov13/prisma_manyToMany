const { Router } = require("express");
const authorController = require("../controllers/author.controller");

class AuthorRoute {
    constructor() {
        this.route = Router();
        this.initData()
    }

    initData() {
        this.route.get("/", authorController.getData);
        this.route.get("/:id", authorController.getDataById);
        this.route.post("/", authorController.createData);
        this.route.patch("/:id", authorController.updateData);
        this.route.delete("/:id", authorController.deleteData);
    }
};

const authorRoute = new AuthorRoute().route;
module.exports = authorRoute;