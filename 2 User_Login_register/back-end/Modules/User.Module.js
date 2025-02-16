import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    mobile: {
        type: String,
        required: true,
        min: 10,
        max: 10
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    }
}, {timestamps: true
});


export const User = mongoose.model('User', userSchema);