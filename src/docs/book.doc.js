/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Kitoblar bilan bog‘liq API'lar
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Barcha kitoblarni olish (pagination, filter, sort bilan)
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: "Sahifa raqami (default: 1)"
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *         description: Har sahifada nechta kitob bo‘lishi
 *       - in: query
 *         name: contains
 *         schema:
 *           type: string
 *         description: Nomi bo‘yicha qidirish
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Saralash tartibi
 *       - in: query
 *         name: column
 *         schema:
 *           type: string
 *           enum: [id, name]
 *         description: Qaysi ustun bo‘yicha saralash
 *     responses:
 *       200:
 *         description: Kitoblar muvaffaqiyatli qaytarildi
 *       500:
 *         description: Serverda xatolik yuz berdi
 */

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: ID bo‘yicha kitobni olish
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Kitob ID'si
 *     responses:
 *       200:
 *         description: Kitob topildi
 *       404:
 *         description: Kitob topilmadi
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Yangi kitob qo‘shish
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - photo
 *               - price
 *               - genres
 *               - authors
 *             properties:
 *               name:
 *                 type: string
 *                 example: Kitob nomi
 *               photo:
 *                 type: string
 *                 example: https://example.com/photo.jpg
 *               price:
 *                 type: number
 *                 example: 45000
 *               genres:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [1, 2]
 *               authors:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [1, 3]
 *     responses:
 *       201:
 *         description: Kitob muvaffaqiyatli yaratildi
 *       400:
 *         description: Noto‘g‘ri so‘rov
 */

/**
 * @swagger
 * /books/{id}:
 *   patch:
 *     summary: Kitob ma’lumotlarini yangilash
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Kitob ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               price:
 *                 type: number
 *               genres:
 *                 type: array
 *                 items:
 *                   type: integer
 *               authors:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Kitob muvaffaqiyatli yangilandi
 *       404:
 *         description: Kitob topilmadi
 */

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Kitobni o‘chirish
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Kitob ID'si
 *     responses:
 *       200:
 *         description: Kitob muvaffaqiyatli o‘chirildi
 *       404:
 *         description: Kitob topilmadi
 */
