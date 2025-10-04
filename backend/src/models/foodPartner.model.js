const mongoose = require("mongoose");


const foodPartnerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
},
phone:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
resturant:{
    type:String,
    required:true
},
totalMeals:{
    type:String,
    required:true
},
customerServed:{
    type:String,
    required:true
}
},
{
    timestamps:true
}
)

const foodPartnerModel = mongoose.model("foodpartner", foodPartnerSchema);
module.exports = foodPartnerModel;