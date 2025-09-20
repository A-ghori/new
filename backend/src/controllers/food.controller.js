const foodModel = require("../models/food.model");
const foodPartner = require("../middlewares/auth.middleware") 

async function createFood(req,res) {
        console.log(req.foodPartner)
console.log(req.body)
console.log(req.file)
        res.send("Food item create")
}
module.exports = {
    createFood
}
