// src/routes/index.js
const express = require("express");
const router = express.Router();

const productRoutes = require("../routes/ProductRoutes");
const salesRepRoutes = require("../routes/SalesRepRoutes");
const salesRoutes = require("../routes/SaleRoutes");

router.use("/products", productRoutes);
router.use("/salesreps", salesRepRoutes);
router.use("/sales", salesRoutes);

module.exports = router;
