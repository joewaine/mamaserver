const express = require("express");
const router = express.Router();
const auth = require("../../../config/auth");
const userController = require("../controller/userController");
const cors = require("cors");


let corsOptions = { origin: true }


router.post("/register", userController.registerNewUser);
router.post("/login", cors(corsOptions), userController.loginUser);
router.post("/addproduct", userController.addProduct);
router.get('/:id', userController.getUserProducts);
      
module.exports = router;

