const express = require('express');
const router = express.Router();


// IMPORT REGION ROUTES
const regionRoutes = require("./region")

// IMPORT DISTRICT ROUTES
const districtRoutes = require("./district")

// IMPORT PHARMACY ROUTES
const pharmacyRoutes = require("./pharmacy");

// IMPORT STOCK ROUTES
const stockRoutes = require("./stock");

// IMPORT MEDICINE ROUTES
const medicineRoutes = require("./medicine");

// IMPORT MEDICINE TYPE ROUTES
const medicineTypeRoutes = require("./medicinetype");

//=================================================================================

// CALl REGION ROUTES
router.use("/region", regionRoutes)

// CALL DISTRICT ROUTES
router.use("/district", districtRoutes);


// CALL PHARMACY ROUTES
router.use("/pharmacy", pharmacyRoutes);

// CALL STOCK ROUTES
router.use("/stock", stockRoutes);

// CALL MEDICINE ROUTES
router.use("/medicine", medicineRoutes);

// CALL MEDICINE TYPE ROUTES
router.use("/medicinetype", medicineTypeRoutes);



module.exports = router;
