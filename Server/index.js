var express = require('express');
const app = express(),
    PORT = process.env.PORT || 8080,
    UserRouter = require("./Router/user.router.js"),
    ProductRouter = require("./Router/product.router.js");
fileUpload = require("express-fileupload");
require("dotenv").config();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({}));
app.use("/api", UserRouter)
app.use("/api", ProductRouter)

async function startApp() {
    try {
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));

    } catch (e) {
        console.log(e)
    }
}

startApp()