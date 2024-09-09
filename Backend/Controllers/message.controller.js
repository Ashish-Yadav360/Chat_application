import Conversation from "../Models/Conversation.Model.js";
import Message from "../Models/Message.Model.js";
import { getRecieverIdSocketId, io } from "../Socket/socket.js";

export const sendMessage = async(req, res) => {
  try {
    const { message } = req.body;    // Getting message from User.
    const { id: recevierid } = req.params;
    const senderId = req.user._id;
    
    let converstation = await Conversation.findOne({participation:{$all:[senderId,recevierid]}}) //Finding the conversation between the users.
    // IF IT DOESN'T THEN  WE ARE CREATING IT.
    if(!converstation){         
        converstation = await Conversation.create({
           participation:[senderId, recevierid],
        })

    }
    // CREATING MESSAGE STRUCTURE. 
  const newMessage = new Message({
    senderId,
    recevierid,
    message
  })
  //IF NEW MESSAGE THEN PUSH IT TO THE CONVERSATION. 
  if(newMessage){
    converstation.messages.push(newMessage._id);
  } 
  // await converstation.save();
  // await newMessage.save();
  //below will run parrelly and faster , will not block another request.
  await Promise.all([converstation.save(), newMessage.save()]);

  const receiverSocketId = getRecieverIdSocketId(recevierid);
  if(receiverSocketId){
    io.to(receiverSocketId).emit("newMessage",newMessage);
  }

  return res.status(201).json(newMessage);

  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const getMessage = async(req,res)=>{
   try {
    const {id:recevierid}= req.params;
    const senderId = req.user._id;
    console.log(senderId,recevierid);
    let conversations = await Conversation.findOne({participation:{$all:[senderId,recevierid]}}).populate('messages');
    if(!conversations){
      return res.status(200).json([]);
    }
    const convo = conversations.messages;
    res.status(200).json(convo);

    
   } catch (error) {
    console.log("Error in getMessage controller", error.message);
    res.status(500).json({ message: "Internal server Error" });
   }
}