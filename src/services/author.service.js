const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AuthorService {
    async getData(take, skip, where, order, column){ 
        return await prisma.author.findMany({
            where,
            take,
            skip,
            orderBy: {
                [column]: order
            }
        })
    };

    async getDataById(id) {
        const data = await prisma.author.findFirst({ where: { id: parseInt(id) }})
        if(!data) {
            return { status: 404, message: "Author not found" }
        }
        return data;
    };

    async createData(data) {
        return await prisma.author.create({
            data
        })
    };

    async updateData(id, data) {
        const findData = await prisma.author.findFirst({ where: { id: parseInt(id) }})
        if(!findData) {
            return { status: 404, message: "Author not found" }
        }
        return await prisma.author.update({
            where: {id: parseInt(id)},
            data
        })
    };

    async deleteData(id) {
        const data = await prisma.author.findFirst({ where: { id: parseInt(id) }})
        if(!data) {
            return { status: 404, message: "Author not found" }
        }
        return await prisma.author.delete({
            where: {id: parseInt(id)}
        })
    }
};

const authorService = new AuthorService();
module.exports = authorService;