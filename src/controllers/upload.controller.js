async function uploadImage(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: 'Rasm yuklanishi kerak'
            });
        }

        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        
        return res.status(200).json({
            url: imageUrl
        });
    } catch (error) {
        console.error(`Yuklash xatosi: ${error.message}`);
        return res.status(500).json({
            success: false,
            error: error.message || 'Serverda xatolik yuz berdi'
        });
    }
}

module.exports = { uploadImage };