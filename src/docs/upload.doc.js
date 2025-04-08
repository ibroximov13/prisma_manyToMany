/**
 * @swagger
 * components:
 *   schemas:
 *     UploadResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         url:
 *           type: string
 *         filename:
 *           type: string
 *       example:
 *         success: true
 *         url: "http://localhost:3000/uploads/123456789-file.jpg"
 *         filename: "123456789-file.jpg"
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         error:
 *           type: string
 *       example:
 *         success: false
 *         error: "Rasm yuklanishi kerak"
 */

/**
 * @swagger
 * /uploads:
 *   post:
 *     summary: Rasm yuklash
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Rasm muvaffaqiyatli yuklandi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UploadResponse'
 *       400:
 *         description: Xato yuz berdi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Server xatosi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */