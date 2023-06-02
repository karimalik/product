const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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