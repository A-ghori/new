const express = require("express");
const authController = require('../controllers/auth.controller')
const authMiddleWare = require('../middlewares/auth.middleware'); // sahi path
const router = express.Router();



router.post('/user/register',authController.registerUser)
router.post("/user/login", authController.loginUser)
router.get("/user/logout",authController.logOutUser)

// Checking Controller
router.get('/check', authMiddleWare.authUserMiddleware, authController.checkUser)

router.post('/partner/register',authController.registerFoodPartner)
router.post("/partner/login",authController.loginFoodPartner)
router.get('/partner/logout',authController.logOut)
module.exports = router