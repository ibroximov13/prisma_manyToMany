const { Router } = require("express");
const upload = require("../config/multer");
const uploadImage = require("../controllers/upload.controller");

class UploadRoute {
    constructor() {
        this.route = Router();
        this.initRoutes()
    };

    initRoutes() {
        this.route.post("/", upload.single("image"), uploadImage);
    };
};

const uploadRoute = new UploadRoute().route;
module.exports = uploadRoute