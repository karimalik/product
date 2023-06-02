const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        minlength: 8,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model("users", UserSchema)

module.exports = User