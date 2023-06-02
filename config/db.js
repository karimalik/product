const mongoose = require("mongoose");

//configure mongoose
const connectDB = async () => {
    await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Database connected")
}

module.exports = connectDB