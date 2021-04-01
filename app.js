const express = require('express')
const app = express()


app.set("view engine", "hbs")

app.get("/", (req, res) => { res.render("index") })
app.get("/pageTwo", (req, res) => { res.render("pageTwo.hbs") })





















app.listen(3000)