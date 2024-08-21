// src/controllers/SaleController.js
const SaleService = require("../Services/SaleService");

class SaleController {
  async getAllSales(req, res, next) {
    try {
      const sales = await SaleService.getAllSales();
      res.json(sales);
    } catch (error) {
      next(error);
    }
  }

  async getSaleById(req, res, next) {
    try {
      const { id } = req.params;
      const sale = await SaleService.getSaleById(id);
      res.json(sale);
    } catch (error) {
      res.status(404).json({ error: "Sorry, we didn't find what you were looking for." });
    }
  }

  async createSale(req, res, next) {
    try {
      const newSale = await SaleService.createSale(req.body);
      res.json(newSale);
    } catch (error) {
      res.status(500).json({ error: "There was an error during sale creation." });
    }
  }

  async updateSale(req, res, next) {
    try {
      const { id } = req.params;
      const updatedSale = await SaleService.updateSale(id, req.body);
      res.json({ updatedSale, id });
    } catch (error) {
      res.status(404).json({ error: "There was an error during sale update." });
    }
  }

  async deleteSale(req, res, next) {
    try {
      const { id } = req.params;
      const deletedSale = await SaleService.deleteSale(id);
      res.json(deletedSale);
    } catch (error) {
      res.status(404).json({ msg: `Error for this ${id} id.` });
    }
  }
}

module.exports = new SaleController();
