const express = require('express')
const mongoose = require("mongoose");
const foodPartnerModel = require("../models/foodPartner.model");
const foodModel = require("../models/food.model")
const router = express.Router()
//api/food-partner/:id
async function getFoodPartnerById(req,res){

const id = req.params.id;
try {
    const foodPartner = await foodPartnerModel.findById(id)
    const foodItemsByFoodPartner = await foodModel.find({ foodPartner:
        id
    })
   if (!foodPartner) {
    return res.status(400).json({
        success:false,
        message: "Food Partner Not avaialble"
    });
}
res.status(200).json({
    success:true,
    message: "Food Partner Fetched Successfully",
    foodPartner: {
        ...foodPartner.toObject(),
        foodItems: foodItemsByFoodPartner
    }
    });
}  catch (error) {
    res.status(500).json({message: "Server not responding yet", error:error.message})
}
}

// For delete items 
const deleteFoodItems = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ID detected");
      return res.status(400).json({ message: "Invalid Food Item ID" });
    }

    const foodItem = await foodModel.findById(id);
    console.log("Found foodItem:", foodItem);
    if (!foodItem) return res.status(404).json({ message: "Food Item not found" });

    await foodModel.findByIdAndDelete(id);
    console.log("Deleted foodItem successfully");
    res.json({ message: "Food Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
    getFoodPartnerById,
    deleteFoodItems
}