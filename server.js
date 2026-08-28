const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/about", (req, res) => {
    res.send("about page")
})

app.get("/work", (req, res) => {
    res.send("work page")
})

app.listen(3000, () => {
    console.log("server is listening at port 3000")
})