require("dotenv").config();
const express = require('express');
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//middleware
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3001");
});

module.exports = app;
