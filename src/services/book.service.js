const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BookService {
    async getData(take, skip, order, column, where) {
        return await prisma.book.findMany({
            where,
            take,
            skip,
            orderBy: {
                [column]: order
            },
            include: {
                authors: true,
                genres: true
            },
        })
    }

    async getDataById(id) {
        const data = await prisma.book.findFirst({ where: { id: parseInt(id) }, include: { authors:true, genres: true }})
        if(!data) {
            return { status: 404, message: "book not found" }
        }
        return data
    };

    async createData(data) {
        const { name, photo, price, authors = [], genres = []} = data;
        return await prisma.book.create({
            data: {
                name,
                photo,
                price,
                authors: {
                    connect: authors.map((id) => ({ id }))
                },
                genres: {
                    connect: genres.map((id) => ({ id }))
                },
            },
            include: {
                genres: true,
                authors: true
            }
        })
    };

    async updateData(id, data) {
        const { name, photo, price, authors = [], genres = []} = data;
        const findData = await prisma.book.findFirst({ where: { id: parseInt(id) }})
        if(!findData) {
            return { status: 404, message: "book not found" }
        }
        return await prisma.book.update({

            where: {id: parseInt(id)},
            data: {
                name,
                photo,
                price,
                authors: {
                    set: authors.map((id) => ({ id }))
                },
                genres: {
                    set: genres.map((id) => ({ id }))
                }
            },
            include: {
                authors: true,
                genres: true
            }
        })
    };

    async deleteData(id) {
        const data = await prisma.book.findFirst({ where: { id: parseInt(id) }})
        if(!data) {
            return { status: 404, message: "book not found" }
        }
        return await prisma.book.delete({
            where: {id: parseInt(id)},
            include: {
                authors: true,
                genres: true
            }
        })
    }
};

const bookService = new BookService();
module.exports = bookService;