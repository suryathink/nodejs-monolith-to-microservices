import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';

const app=express();

app.use(express.json());
app.use(cors());

const PORT=3003

app.get('/health', (req,res)=>{
  return res.status(200).json({
    status:"order service is up and running"
   })
})

connectDB()

app.listen(PORT,()=>{
    console.log("PORT",PORT)
    console.log(`order service listening o port ${PORT}`)
})