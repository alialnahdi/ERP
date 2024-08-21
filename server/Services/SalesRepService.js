// src/services/SalesRepService.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class SalesRepService {
  async getAllSalesReps() {
    return await prisma.salesRep.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async getSalesRepsWithSalesCount() {
    return await prisma.salesRep.findMany({
      select: {
        id: true,
        name: true,
        sales: true,
      },
    });
  }

  async getSalesRepById(id) {
    const salesRep = await prisma.salesRep.findFirst({ where: { id } });

    if (!salesRep) {
      throw new Error("Sales Rep not found.");
    }

    return salesRep;
  }

  async createSalesRep(data) {
    return await prisma.salesRep.create({ data });
  }

  async updateSalesRep(id, data) {
    const updatedSalesRep = await prisma.salesRep.update({
      where: { id },
      data,
    });

    if (!updatedSalesRep) {
      throw new Error("Sales Rep not found or could not be updated.");
    }

    return updatedSalesRep;
  }

  async deleteSalesRep(id) {
    const countSales = await prisma.sale.count({
      where: { salesRepId: { equals: id } },
    });

    if (countSales > 0) {
      throw new Error(
        "This sales rep is associated with sales. Delete those sales first."
      );
    }

    return await prisma.salesRep.delete({ where: { id } });
  }
}

module.exports = new SalesRepService();
