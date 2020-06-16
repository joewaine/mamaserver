const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const request = require('request');

router.post("/addproduct", productController.addProduct);

router.get('/allproducts', productController.getProducts);



router.post('/:id', productController.deleteProduct);
      


router.get('/snipcartproducts', productController.snipCartProducts)


   









module.exports = router;




