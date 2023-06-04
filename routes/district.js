const express = require('express');
const router = express.Router();
const districtController = require("../controllers/district")

// GET ALL DISTRICT
router.get("/", districtController.getAllDistrict);

// CREATE A DISTRICT
router.post("/", districtController.createDistrict);

// GET ALL DISTRICT BY ID
router.get("/:id", districtController.getDistrictById);

// UPDATE DISTRICT
router.put("/:id", districtController.updateDistrict);

// DELETE DISTRICT
router.delete("/:id", districtController.deleteDistrict);


module.exports = router