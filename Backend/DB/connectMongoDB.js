import mongoose from "mongoose";

const connectToMongoDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Successfully connected MongoDB")
        
    } catch (error) {
        console.log(`Error connecting to the mongo db database ${error}`)
    }
}

export default connectToMongoDB;