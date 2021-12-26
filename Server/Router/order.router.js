var express = require('express');
var router = express.Router();
const OrderController = require("../Controller/order.controller.js");

router.post('/order/add', OrderController.createProductOrder);
router.get('/order', OrderController.getAllProduct);

module.exports = router;