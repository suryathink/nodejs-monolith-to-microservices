import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import userRouter from './routes/userRoutes';

const app=express();


app.use(express.json());
app.use(cors());

const PORT=3001

app.get('/health', (req,res)=>{
  return res.status(200).json({
    status:"user service is up and running"
   })
})

connectDB()


app.use("/api/users",userRouter )


app.listen(PORT,()=>{
    console.log("PORT",PORT)
    console.log(`user service listening o port ${PORT}`)
})