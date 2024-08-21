// src/services/SaleService.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class SaleService {
  async getAllSales() {
    return await prisma.sale.findMany({
      orderBy: { createdAt: "desc" },
      include: { product: true, salesRep: true },
    });
  }

  async getSaleById(id) {
    const sale = await prisma.sale.findFirst({
      where: { id },
      include: { product: true, salesRep: true },
    });

    if (!sale) {
      throw new Error("Sale not found.");
    }

    return sale;
  }

  async createSale(saleData) {
    const { price: productPrice } = await prisma.product.findFirst({
      select: { price: true },
      where: { id: saleData.productId },
    });

    const newSale = await prisma.sale.create({
      data: { ...saleData, totalPrice: saleData.quanity * productPrice },
      include: { product: true, salesRep: true },
    });

    return newSale;
  }

  async updateSale(id, saleData) {
    try {
      const updatedSale = await prisma.sale.update({
        where: { id },
        data: saleData,
      });

      if (!updatedSale) {
        throw new Error("Sale not found or could not be updated.");
      }

      return updatedSale;
    } catch (error) {
      throw new Error("Failed to update sale: " + error.message);
    }
  }

  async deleteSale(id) {
    const deletedSale = await prisma.sale.delete({
      where: { id },
    });

    if (!deletedSale) {
      throw new Error("Sale not found or could not be deleted.");
    }

    return deletedSale;
  }
}

module.exports = new SaleService();
