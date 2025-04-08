const express = require("express");
const authorRoute = require("./routes/auhtor.route");
const genreRoute = require("./routes/genre.route");
const bookRoute = require("./routes/book.route");
const uploadRoute = require("./routes/upload.route");
const { setupSwagger } = require("./config/swagger");

module.exports = class App {
    constructor(){
        this.app = express();
        this.configMiddleware();
        this.initRoutes()

    };

    configMiddleware(){
        this.app.use(express.json());
        this.app.use('/uploads', express.static('uploads'));
        setupSwagger(this.app);
    };

    initRoutes() {
        this.app.use("/authors", authorRoute);
        this.app.use("/genres", genreRoute);
        this.app.use("/books", bookRoute);
        this.app.use("/uploads", uploadRoute);
        
    };

    start() {
        this.app.listen(3000, () => console.log("Server started has been on port 3000"))
    }
};