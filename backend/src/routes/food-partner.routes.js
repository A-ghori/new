const express = require('express');
const foodPartnerController = require('../controllers/food-partner.controller'); // sahi path
const authMiddleWare = require('../middlewares/auth.middleware'); // sahi path

const router = express.Router();

// api/food-partner/:id 
router.get("/:id",
    authMiddleWare.authUserMiddleware,
    foodPartnerController.getFoodPartnerById
)


module.exports = router;
