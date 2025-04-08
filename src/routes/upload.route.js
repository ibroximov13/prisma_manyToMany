const { Router } = require('express');
const multer = require('multer');
const upload = require('../config/multer');
const { uploadImage } = require('../controllers/upload.controller');

const router = Router();

router.post('/', upload.single('image'), uploadImage, (error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }
    if (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }
    next();
});

module.exports = router;