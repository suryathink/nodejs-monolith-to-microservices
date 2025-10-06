import express from 'express';
import cors from 'cors';
import {connectDB} from './config/db';
import { createBook, deleteBook, getAllBooks, getBookById, searchBooks, updateBook } from './controller/bookController';

const app=express();


app.use(express.json());
app.use(cors());

const PORT=3500
connectDB()

app.get('/health', (req,res)=>{
  return res.status(200).json({
    status:"Book service is up and running"
   })
})

app.get('/api/books', getAllBooks)
app.get('/api/books/search', searchBooks)
app.get('/api/books/:id', getBookById)

// Admin routes
// todo 
app.post('/api/books/', createBook)
app.post('/api/books/:id', updateBook)
app.delete('/api/books/:id', deleteBook)

app.listen(PORT,()=>{
  console.log(PORT)
  console.log(`Book service running on Port ${PORT}`)
})


