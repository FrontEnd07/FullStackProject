var express = require('express');
const app = express(),
    PORT = process.env.PORT || 8080,
    UserRouter = require("./Router/user.router.js"),
    ProductRouter = require("./Router/product.router.js");
require("dotenv").config();


app.use(express.json());
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }))
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