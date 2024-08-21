// src/services/ProductService.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ProductService {
  async getAllProducts() {
    return await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async getProductById(id) {
    const product = await prisma.product.findFirst({ where: { id } });

    if (!product) {
      throw new Error("Product not found.");
    }

    return product;
  }

  async createProduct(data) {
    return await prisma.product.create({ data });
  }

  async updateProduct(id, data) {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data,
    });

    if (!updatedProduct) {
      throw new Error("Product not found or could not be updated.");
    }

    return updatedProduct;
  }

  async deleteProduct(id) {
    const countSales = await prisma.sale.count({
      where: { productId: { equals: id } },
    });

    if (countSales > 0) {
      throw new Error(
        "This product is associated with sales. Delete those sales first."
      );
    }

    return await prisma.product.delete({ where: { id } });
  }
}

module.exports = new ProductService();
