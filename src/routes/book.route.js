const { Router } = require("express");

class BookRoute {
    constructor() {
        this.route = Router();
        this.initRoutes()
    };

    initRoutes() {
        this.route.get()
    }
};

const bookRoute = new BookRoute().route;
module.exports = bookRoute;