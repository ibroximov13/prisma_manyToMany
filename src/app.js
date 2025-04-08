const express = require("express");
const authorRoute = require("./routes/auhtor.route");
const genreRoute = require("./routes/genre.route");
const bookRoute = require("./routes/book.route");
const uploadRoute = require("./routes/upload.route");

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
        this.app.use("/books", bookRoute);
        this.app.use("/uploads", uploadRoute);
    };

    start() {
        this.app.listen(4000, () => console.log("Server started has been on port 4000"))
    }
};