const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BookService {
    async getData() {
        return await prisma.book.findMany()
    }

    async getDataById() {
        return
    }
}