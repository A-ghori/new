const mongoose = require("mongoose");


const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    videos:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
},
foodPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"foodpartner"
}
},
{
    timestamps:true
}
)

const FoodModel = mongoose.model("food", foodSchema);
module.exports = FoodModel;