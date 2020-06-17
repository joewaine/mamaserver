const express = require("express");
const router = express.Router();
const auth = require("../../../config/auth");
const userController = require("../controller/userController");

var cors = require('cors')


router.post("/register", cors(), userController.registerNewUser);
router.post("/login", cors(), userController.loginUser);

router.post("/addproduct", cors(), userController.addProduct);

router.get('/:id', cors(), userController.getUserProducts);
      

module.exports = router;

