const mongoose = require('mongoose');
require('dotenv').config();


const mongoURI = process.env.MONGO_URI

function connectDb() {
    mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        maxPoolSize:10
    })
    .then(()=>{
        console.log("MongoDb is connected");
    })
    .catch((error)=>{
        console.log("MongoDb connection error:", error)
    })
}

module.exports = connectDb