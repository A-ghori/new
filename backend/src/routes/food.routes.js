const express = require ("express");
const router = express.Router();
const foodController = require("../controllers/food.controller")
const authMiddleWare = require("../middlewares/auth.middleware")
const multer = require("multer");

const upload = multer({
    storage: multer.memoryStorage(),
})

// POST /api/food/ (protected)/
router.post(
    '/',
    authMiddleWare.authFoodPartnerMiddleware,
     upload.single("video"),
    foodController.createFood
    )

    router.get(
        "/",
        authMiddleWare.authUserMiddleware,
        foodController.findFood
    )

module.exports = router
