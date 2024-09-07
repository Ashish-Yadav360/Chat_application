import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js'
import messageRoute from './routes/message.route.js'
import userRoute from './routes/user.routes.js';
import connectToMongoDB from "./DB/connectMongoDB.js";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

// app.get('/', (req, res)=>{
//     res.send('Hello from Backend');
// })
app.use(cookieParser());
app.use(express.json()); // to parse incoming requests from frontend to json payloads.
app.use('/api/auth', authRoutes)   // Middleware to perfrom authentication. 
app.use('/api/user', userRoute)
app.use('/api/messages',messageRoute)
app.listen(PORT, ()=>{
   connectToMongoDB();
   console.log(`Server is running at PORT ${PORT}`);
})