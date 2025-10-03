const express = require('express');
const foodPartnerController =require('../controllers/food-partner.controller')
const authMiddleWare = require("../middlewares/auth.middleware")
const router = express.Router();

//api/food-partner/:id 

router.get("/:id",
    authMiddleWare.authUserMiddleware,
    foodPartnerController.getFoodPartnerById
)


module.exports = router;