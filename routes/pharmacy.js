const express = require("express");
const router = express.Router();
const pharmacyController = require("../controllers/pharmacy");

// GET ALL PHARMACY
router.get("/", pharmacyController.getAllPharmacies);

// ADD A PHARMACY
router.post("/", pharmacyController.createPharmacy);

// GET PHARMACY BY ID
router.get("/:id", pharmacyController.getPharmacyById);

// UPDATE PHARMACY BY ID 
router.put("/:id", pharmacyController.updatePharmacy); 

// DELETE PHARMACY BY ID
router.delete("/:id", pharmacyController.deletePharmacy);

module.exports = router;
