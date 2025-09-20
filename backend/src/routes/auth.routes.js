const express = require("express");
const authController = require('../controllers/auth.controller')
const router = express.Router();



router.post('/user/register',authController.registerUser)
router.post("/user/login", authController.loginUser)
router.get("/user/logout",authController.logOutUser)

router.post('/partner/register',authController.registerFoodPartner)
router.post("/partner/login",authController.loginFoodPartner)
router.get('/partner/logout',authController.logOut)
module.exports = router