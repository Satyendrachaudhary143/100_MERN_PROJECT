import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Routs/ToduRout.js';
dotenv.config({});

const app = express();
const port=process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// rout
app.use('/api',router)

// db conect

mongoose.connect(process.env.URL)
    .then(() => console.log("conected"))
.catch((err)=>console.log(err))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
