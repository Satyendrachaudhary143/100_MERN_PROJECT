import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import AuthRout from './Routs/AuthRout.js';
dotenv.config();


const app = express();

app.use(cors())
app.use(express.json());
app.use('/api', AuthRout);





mongoose.connect(process.env.URL).then(()=>{console.log('Connected to database')}).catch((err)=>{console.log(err)});

app.listen(3000, () => {console.log('Server is running on port 3000')});