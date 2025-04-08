/**
 * @swagger
 * tags:
 *   - name: Authors
 *     description: Author management
 */

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Get all authors
 *     tags: [Authors]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: "Page number"
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *         description: "Number of authors per page"
 *       - in: query
 *         name: contains
 *         schema:
 *           type: string
 *         description: "Search by name"
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: "Sort order"
 *       - in: query
 *         name: column
 *         schema:
 *           type: string
 *           enum: [id, name]
 *         description: "Sort by column"
 *     responses:
 *       200:
 *         description: List of authors
 *   post:
 *     summary: Create new author
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "J.K. Rowling"
 *               year:
 *                 type: integer
 *                 example: 1965
 *     responses:
 *       201:
 *         description: Author created
 */

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Get author by ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "Author ID"
 *     responses:
 *       200:
 *         description: Author found
 *   patch:
 *     summary: Update author
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "Author ID"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "J.K. Rowling"
 *               year:
 *                 type: integer
 *                 example: 1965
 *     responses:
 *       200:
 *         description: Author updated
 *   delete:
 *     summary: Delete author
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: "Author ID"
 *     responses:
 *       200:
 *         description: Author deleted
 */