const express = require("express");
const authorRoute = require("./routes/auhtor.route");
const genreRoute = require("./routes/genre.route");

module.exports = class App {
    constructor(){
        this.app = express();

    };

    configMiddleware(){
        this.app.use(express.json());
    };

    initRoutes() {
        this.app.use("/authors", authorRoute);
        this.app.use("/genres", genreRoute);
    };

    start() {
        this.app.listen(3000, () => console.log("Server started has been on port 3000"))
    }
};