import mongoose from "mongoose";
const toduScema = new mongoose.Schema({
    todudate: {
        type: String,
        required:true
    },
    todu: {
        type: String,
        required:true
    }
})

export const Todu =mongoose.model("Todu",toduScema)