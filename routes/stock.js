const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stock");

// GET ALL STOCK
router.get("/", stockController.getAllStock);

// CREATE A STOCK
router.post("/", stockController.createStock);

// GET ALL STOCK BY ID
router.get("/:id", stockController.getStockById);

// UPDATE STOCK
router.put("/:id", stockController.updateStock); 

// DELETE STOCK
router.delete("/:id", stockController.deleteStock);

module.exports = router;
