const express = reqiure('express');
const foodPartnerController = reqiure('../controllers/food-partner.controller')

const router = express.Router();

//api/food-partner/:id 

router.get("/:id",
    authMiddleWare.authUserMiddleware,
    foodPartnerController.getFoodPartnerById
)


module.exports = router;