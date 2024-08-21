// src/routes/ProductRoutes.js
const express = require("express");
const router = express.Router();
const ProductController = require("../Controllers/ProductController");

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
