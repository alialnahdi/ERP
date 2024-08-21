// src/routes/SalesRepRoutes.js
const express = require("express");
const router = express.Router();
const SalesRepController = require("../Controllers/SalesRepController");

router.get("/", SalesRepController.getAllSalesReps);
router.get("/countSales", SalesRepController.getSalesRepsWithSalesCount);
router.get("/:id", SalesRepController.getSalesRepById);
router.post("/", SalesRepController.createSalesRep);
router.put("/:id", SalesRepController.updateSalesRep);
router.delete("/:id", SalesRepController.deleteSalesRep);

module.exports = router;
