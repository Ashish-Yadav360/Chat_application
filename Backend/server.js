import express from "express";
import dotenv from "dotenv";
import path from 'path'
import authRoutes from './routes/auth.routes.js'
import messageRoute from './routes/message.route.js'
import userRoute from './routes/user.routes.js';
import connectToMongoDB from "./DB/connectMongoDB.js";
import cookieParser from "cookie-parser";
import {server,io,app} from './Socket/socket.js'
const PORT = process.env.PORT || 5000;
dotenv.config();
const __dirname = path.resolve();
// app.get('/', (req, res)=>{
//     res.send('Hello from Backend');
// })
app.use(cookieParser());
app.use(express.json()); // to parse incoming requests from frontend to json payloads.
app.use('/api/auth', authRoutes)   // Middleware to perfrom authentication. 
app.use('/api/user', userRoute)
app.use('/api/messages',messageRoute)
app.use(express.static(path.join(__dirname,"/Frontend/dist")));
app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,"/Frontend","dist","index.html"))
})
   
server.listen(PORT, ()=>{
   connectToMongoDB();
   console.log(`Server is running at PORT ${PORT}`);
})