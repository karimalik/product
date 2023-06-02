require("dotenv").config();
const express = require('express');
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//middleware
app.use(express.json());

const server = app.listen(process.env.PORT, () => {
    console.log("Server is running");
});

//error hadling
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})

module.exports = app;
