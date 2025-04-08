const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class GenreService {
    async getData(){ 
        return await prisma.genre.findMany()
    };

    async getDataById(id) {
        const data = await prisma.genre.findFirst({ where: { id: parseInt(id) }})
        if(!data) {
            return { status: 404, message: "genre not found" }
        }
        return data
    };

    async createData(data) {
        return await prisma.genre.create({
            data
        })
    };

    async updateData(id, data) {
        const findData = await prisma.genre.findFirst({ where: { id: parseInt(id) }})
        if(!findData) {
            return { status: 404, message: "genre not found" }
        }
        return await prisma.genre.update({
            where: {id: parseInt(id)},
            data
        })
    };

    async deleteData(id) {
        const data = await prisma.genre.findFirst({ where: { id: parseInt(id) }})
        if(!data) {
            return { status: 404, message: "genre not found" }
        }
        return await prisma.genre.delete({
            where: {id: parseInt(id)}
        })
    }
};

const genreService = new GenreService();
module.exports = genreService