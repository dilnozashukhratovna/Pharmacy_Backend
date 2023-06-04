const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region");

// GET ALL REGION
router.get("/", regionController.getAllRegions)

// ADD A REGION
router.post("/", regionController.createRegion);

// GET REGION BY ID
router.get("/:id", regionController.getRegionById);

// UPDATE REGION BY ID
router.put("/:id", regionController.updateRegion); 

// DELETE REGION BY ID
router.delete("/:id", regionController.deleteRegion);

            
module.exports = router;
