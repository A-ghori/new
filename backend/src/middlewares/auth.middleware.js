const foodPartnerModel  = require('../models/foodPartner.model')
const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')

// For Get request from FoodPartner MiddleWare and Check if the FoodPartner is valid or not
async function authFoodPartnerMiddleware(req,res,next) {
    
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Please Login or Register First"
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const foodPartner = await foodPartnerModel.findById(decoded.id)
        req.foodPartner = foodPartner;
        
        next()
        
    }catch(err){
            return res.status(401).json({
                message: "Invalid token"
            })
    }
}


// For Get request from User MiddleWare and Check if the user is valid or not
async function  authUserMiddleware(req,res,next) {
    const token = req.cookies.token;

    if(!token){
        res.status(401).json({
            message: "Please Login or Register first"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id)
        req.user = user 

        next()

    } catch (error) {
        return res.status(401).json({
            message: "Invalid"
        })
    }
}

module.exports = {
    authFoodPartnerMiddleware,
    authUserMiddleware
}