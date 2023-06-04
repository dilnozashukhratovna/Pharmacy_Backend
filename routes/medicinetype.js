const express = require("express");
const router = express.Router();
const medTypeController = require("../controllers/medicinetype");

// GET ALL MEDICINE_TYPE
router.get("/", medTypeController.getAllMedType);

// CREATE A MEDICINE_TYPE
router.post("/", medTypeController.createMedType);

// GET ALL MEDICINE_TYPE BY ID
router.get("/:id", medTypeController.getMedTypeById);

// UPDATE MEDICINE_TYPE
router.put("/:id", medTypeController.updateMedType);
 
// DELETE MEDICINE_TYPE
router.delete("/:id", medTypeController.deleteMedType);

module.exports = router;
