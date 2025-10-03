const foodPartnerModel = require("../models/foodPartner.model");

//api/food-partner/:id
async function getFoodPartnerById(req,res){

const id = req.params.id;
try {
    const foodPartner = await foodPartnerModel.findById(id)
   if (!foodPartner) {
    return res.status(400).json({
        success:false,
        message: "Food Partner Not avaialble"
    });
}
res.status(200).json({
    success:true,
    message: "Food Partner Fetched Successfully",
    foodPartner
    });
}  catch (error) {
    res.status(500).json({message: "Server not responding yet", error:error.message})
}
}


module.exports = {
    getFoodPartnerById
}