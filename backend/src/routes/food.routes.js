const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");
const foodPartnerController = require("../controllers/food-partner.controller");
const authMiddleWare = require("../middlewares/auth.middleware");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

// ✅ Create food (both image + video)
router.post(
  "/",
  authMiddleWare.authFoodPartnerMiddleware,
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "menuImage", maxCount: 1 },
  ]),
  foodController.createFood
);

// ✅ Get all foods
router.get("/", foodController.findFood);

// ✅ Delete food
router.delete("/:id", authMiddleWare.authFoodPartnerMiddleware, (req, res) => {
  console.log("ID received:", req.params.id);
  foodPartnerController.deleteFoodItems(req, res);
});

module.exports = router;

