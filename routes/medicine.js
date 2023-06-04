const express = require('express');
const router = express.Router();
const medController = require("../controllers/medicine")

// GET ALL MEDICINE
router.get("/", medController.getAllMed)

// CREATE NEW MEDICINE
router.post("/", medController.createMed);

// GET MEDICINE BY ID
router.get("/:id", medController.getMedById);

// UPDATE MEDICINE
router.put("/:id", medController.updateMed);

// DELETE MEDICINE
router.delete("/:id", medController.deleteMed);

module.exports = router
