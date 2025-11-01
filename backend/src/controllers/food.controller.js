const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");

//  Create food (image + video)
const createFood = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!req.files || (!req.files.menuImage && !req.files.video)) {
      return res.status(400).json({
        success: false,
        message: "No image or video provided",
      });
    }

    let imageUrl = "";
    let videoUrl = "";

    // Upload image
    if (req.files.menuImage && req.files.menuImage[0]) {
      const imageBuffer = req.files.menuImage[0].buffer.toString("base64");
      const imageResult = await storageService.uploadFile(imageBuffer, uuid());
      imageUrl = imageResult.url;
    }

    // Upload video
    if (req.files.video && req.files.video[0]) {
      const videoBuffer = req.files.video[0].buffer.toString("base64");
      const videoResult = await storageService.uploadFile(videoBuffer, uuid());
      videoUrl = videoResult.url;
    }

    // Save food item in DB
    const foodItem = await foodModel.create({
      name,
      description,
      videos: videoUrl,
      menuImage: imageUrl,
      foodPartner: req.foodPartner._id,
    });

    res.status(201).json({
      success: true,
      message: "Food Item Created Successfully",
      food: foodItem,
    });
  } catch (error) {
    console.error("Error creating food:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//  Fetch all food
const findFood = async (req, res) => {
  const foodItems = await foodModel.find({});
  res.status(200).json({
    success: true,
    message: "Food Items fetched successfully",
    foodItems,
  });
};

module.exports = { createFood, findFood };