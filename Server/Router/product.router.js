var express = require('express');
var router = express.Router();
const ProductController = require("../Controller/product.controller.js");

router.post('/product', ProductController.createProduct);
router.get('/product', ProductController.getProduct);
router.get('/product/:id', ProductController.getOneProduct);
router.put('/product', ProductController.updateProduct);
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router;