const express= require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {bloodGroupDetailsContoller } = require('../controllers/analyticController');
const router = express.Router()





//GET Blood data
router.get("/bloodGroups-data",authMiddleware,bloodGroupDetailsContoller);


module.exports = router