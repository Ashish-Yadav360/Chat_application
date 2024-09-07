import User from "../Models/User.Model.js"
export const getUser = async(req, res)=>{
    try {
        const user = await User.find({_id:{$ne:req.user._id}}).select('-password');
        if(user){
            return res.status(200).json(user);
        }else{
            return res.status(404).json({message:"No user found"});
        }

    } catch (error) {
        console.log("Error in getUser controller", error.message);
        res.status(500).json({ message: "Internal server Error" });
    }
    
}