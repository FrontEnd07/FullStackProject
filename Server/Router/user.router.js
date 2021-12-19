var express = require('express');
var router = express.Router();
const auth = require("../Middleware/auth");
const UserController = require("../Controller/user.controller.js");

router.post('/user', UserController.createUser);
router.post('/user/login', UserController.getCustomer);
router.post('/welcome', auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});
router.get('/user', UserController.getUser);
router.get('/user/:id', UserController.getOneUser);
router.put('/user', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

module.exports = router;