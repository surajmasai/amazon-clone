const express = require('express');

const { register, login } = require("./controllers/auth.controller");

// const hotelController = require("./controllers/hotel.controller");

const app = express();

var cors = require("cors")

app.use(express.json());
app.use(cors())

app.post("/register", register);
app.post("/login", login);

// app.use("/hotel", hotelController)


module.exports = app;            