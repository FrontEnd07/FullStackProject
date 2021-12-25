var express = require('express');
var router = express.Router();
const auth = require("../Middleware/auth");
const UserController = require("../Controller/user.controller.js");

router.post('/user', UserController.createUser);
router.post('/user/login', UserController.getCustomer);
router.get('/user', UserController.getUser);
router.post('/welcome', auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

module.exports = router;