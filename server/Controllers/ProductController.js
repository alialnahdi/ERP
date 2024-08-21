// src/controllers/ProductController.js
const ProductService = require("../Services/ProductService");

class ProductController {
  async getAllProducts(req, res, next) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductById(id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: "Sorry, we didn't find what you were looking for." });
    }
  }

  async createProduct(req, res, next) {
    try {
      const newProduct = await ProductService.createProduct(req.body);
      res.json(newProduct);
    } catch (error) {
      res.status(500).json({ error: "There was an error during product creation." });
    }
  }

  async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const updatedProduct = await ProductService.updateProduct(id, req.body);
      res.json(updatedProduct);
    } catch (error) {
      res.status(404).json({ error: "There was an error during product update." });
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const deletedProduct = await ProductService.deleteProduct(id);
      res.json(deletedProduct);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();
