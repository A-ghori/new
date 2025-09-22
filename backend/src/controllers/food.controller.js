const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service")
const {v4: uuid} = require ("uuid")


async function createFood(req,res) {
        console.log(req.foodPartner)
console.log(req.body)
console.log(req.file)

const fileUploadResult = await storageService.uploadFile( req.file.buffer,uuid())

const foodItem = await foodModel.create({
    name:req.body.name,
    description: req.body.description,
    videos:fileUploadResult.url,
    foodPartner:req.foodPartner._id
})
res.status(201).json({
    message: "Food Item is Created",
    food: foodItem
})
}

async function findFood(req,res) {
    console.log(req.user)
    const foodItems = await foodModel.find({})
    res.status(401).json({
        message: "Food Item Fetched Successfully",
        foodItems
    })
}
module.exports = {
    createFood,
    findFood
}
