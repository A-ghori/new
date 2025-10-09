const express = require ("express");
const router = express.Router();
const foodController = require("../controllers/food.controller")
const foodPartnerController = require('../controllers/food-partner.controller'); // sahi path
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

router.delete("/:id",authMiddleWare.authFoodPartnerMiddleware, (req,res) => {
  console.log("ID received:", req.params.id);
  foodPartnerController.deleteFoodItems(req,res);
})

module.exports = router
