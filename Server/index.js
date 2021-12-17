var express = require('express');
const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080;

async function startApp() {
    try {
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    } catch (e) {
        console.log(e)
    }
}

startApp()