import jwt from "jsonwebtoken"
import User from "../Models/User.Model.js";

export const protectRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.cookies;
        if(!token){
            console.log('No token found');
           return res.status(401).json({error:"Unauthorized Access"})
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        if(!decode){
            console.log("no decoding happend");
           return res.status(401).json({error:"Unauthorized Access"})
        }
        
    
        const user = await User.findById(decode.userid).select('-password');
        if(!user){
            return res.status(400).json({error:"User not found"});
        }
        req.user=user;
        next();
        // console.log(req.user);
    } catch (error) {
        console.log("Error in protectRoute",error.message);
        res.status(500).json({error:"Internal server Error"});
    }
}