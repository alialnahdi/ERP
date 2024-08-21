// src/controllers/SalesRepController.js
const SalesRepService = require("../Services/SalesRepService");

class SalesRepController {
  async getAllSalesReps(req, res, next) {
    try {
      const salesReps = await SalesRepService.getAllSalesReps();
      res.json(salesReps);
    } catch (error) {
      next(error);
    }
  }

  async getSalesRepsWithSalesCount(req, res, next) {
    try {
      const salesReps = await SalesRepService.getSalesRepsWithSalesCount();
      res.json(salesReps);
    } catch (error) {
      next(error);
    }
  }

  async getSalesRepById(req, res, next) {
    try {
      const { id } = req.params;
      const salesRep = await SalesRepService.getSalesRepById(id);
      res.json(salesRep);
    } catch (error) {
      res.status(404).json({ error: "Sorry, we didn't find what you were looking for." });
    }
  }

  async createSalesRep(req, res, next) {
    try {
      const newSalesRep = await SalesRepService.createSalesRep(req.body);
      res.json(newSalesRep);
    } catch (error) {
      res.status(500).json({ error: "There was an error during sales rep creation." });
    }
  }

  async updateSalesRep(req, res, next) {
    try {
      const { id } = req.params;
      const updatedSalesRep = await SalesRepService.updateSalesRep(id, req.body);
      res.json(updatedSalesRep);
    } catch (error) {
      res.status(404).json({ error: "There was an error during sales rep update." });
    }
  }

  async deleteSalesRep(req, res, next) {
    try {
      const { id } = req.params;
      const deletedSalesRep = await SalesRepService.deleteSalesRep(id);
      res.json(deletedSalesRep);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new SalesRepController();
