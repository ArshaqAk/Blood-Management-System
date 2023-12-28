const express= require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController}= require('../controllers/inventoryController')
const router = express.Router()



router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);
//GET Recent BLOOD RECORDS
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

//GET Hospital BLOOD RECORDS
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);


//GET DONAR RECORDS
router.get("/get-donars",authMiddleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-organisation", authMiddleware, getOrgnaisationController);

router.get("/get-organisation-for-hospital", authMiddleware, getOrgnaisationForHospitalController);


module.exports = router