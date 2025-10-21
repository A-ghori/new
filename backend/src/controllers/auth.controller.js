const userModel = require("../models/user.model")
const foodpartner = require('../models/foodPartner.model')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../models/foodPartner.model");


//For User Registration

async function registerUser(req,res) {
    const {fullName, email, password, phone, address} = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        email

    })
    if(isUserAlreadyExist){
        return res.status(400).json({
            success:false,
            message:"User already exists"
        })
        
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword,
        phone,
        address
    })

    const token = jwt.sign({
        id: user._id, 

    },process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(201).json({
        success:true,
        message: "User Registered Successfully",
        user:{
            _id: user._id,
            email:user.email,
            fullName: user.fullName,
            phone: user.phone,
            address:user.address
        }
    })
}


//For User login

async function loginUser(req,res) {
    const {email,password,phone} = req.body;

    const user = await userModel.findOne({
        email,
        phone
    })
    if(!user){
        res.status(400).json({
            success:false,
            message: "Invalid Email or Password"
        })
    }

    const isPasswordValids = await bcrypt.compare(password, user.password);

    if(!isPasswordValids){
        return res.status(400).json({
            success:false,
            message: "Invalid Email or Password"
        })
    }

    const token = jwt.sign({
        id: user._id,

    },process.env.JWT_SECRET,{
        expiresIn:"180d"
    });
    // Set Cookies for presistent login 
    res.cookie("token",token,{
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 6*30*24*60*60*1000 // 6 months
    })

    res.status(200).json({
        success:true,
        message: "User Logged in Successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName,
            phone:user.phone
        }
    })
} 

// For User Check 
async function checkUser(req,res) {
    if(req.user) {
        res.status(200).json({
            success:true,
            user: {
                _id: req.user._id,
                fullName: req.user.fullName,
                email: req.user.email,
                phone: req.user.phone,
                address: req.user.address
            }
        });
    } else {
        res.status(401).json({
            success: false, message: "Not Logged In"
        })
    }
}

//For user LogOut
async function logOutUser(req,res){
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite: 'lax',
    });
    res.status(200).json({
        message: "User logout successfully"
    });
}

// For Food Partner Registration
async function registerFoodPartner (req,res){
    const {name, email, password, phone, address,resturant,totalMeals,customerServed} = req.body;

    const isFoodPartnerAlreadyExist = await foodpartner.findOne({
        email
    })
    if(isFoodPartnerAlreadyExist){
        res.status(400).json({
            success: false,
            message:"Food Partner Already Exist"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const foodPartner = await foodPartnerModel.create({
        name,
        email,
        password:hashedPassword,
        phone,
        address,
        resturant,
        totalMeals,
        customerServed
    })

    const token = jwt.sign({
        id: foodPartner._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        success:true,
        message: " Food Partner Registered SUccessfull ",
        foodPartner: {
            _id: foodPartner._id,
            email:foodPartner.email,
            name:foodPartner.name,
            phone:foodPartner.phone,
            address:foodPartner.address,
            resturant:foodPartner.resturant,
            totalMeals:foodPartner.totalMeals,
            customerServed:foodPartner.customerServed
        }
    })
}

//Login for food Partner 
async function loginFoodPartner(req,res) {
    const {email,password, phone} = req.body;

    const partner = await foodPartnerModel.findOne({
        email,
        phone
    })

    if(!partner){
        res.status(400).json({
            success: false,
            message:"Email or Password Not found "
        })
    }

    const isPasswordValid = await bcrypt.compare(password, partner.password);
    if(!isPasswordValid){
        return res.status(400).json({
            success:false,
            message: "Invalid Password and email"
        })
    }
const token = jwt.sign({
    id: partner._id,
},process.env.JWT_SECRET)
res.cookie("token",token)
res.status(201).json({
    success:true,
    message: "Food Partner Login Successful",
    partner: {
            _id:partner._id,
            email:partner.email,
            name:partner.name,
            phone:partner.phone
    }
})
    }

    //Logout For Food Partner

    async function logOut(req,res){
        res.clearCookie("token")
        res.status(201).json({
            message:"Logout Successfully"
        })
    }



module.exports={
    registerUser,
    loginUser,
    logOutUser,
    registerFoodPartner,
    loginFoodPartner,
    logOut,
    checkUser
}