// src/routes/SaleRoutes.js
const express = require("express");
const router = express.Router();
const SaleController = require("../Controllers/SaleController");

router.get("/", SaleController.getAllSales);
router.get("/:id", SaleController.getSaleById);
router.post("/", SaleController.createSale);
router.put("/:id", SaleController.updateSale);
router.delete("/:id", SaleController.deleteSale);

module.exports = router;
