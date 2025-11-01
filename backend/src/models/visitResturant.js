const mongoose = require ('mongoose');


const visitResturant = new mongoose.Schema({
    ResturantName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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

const ResturantModel = mongoose.model("Resturant",visitResturant);
module.exports = ResturantModel;