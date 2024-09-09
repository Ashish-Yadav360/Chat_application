import { useAuthContext } from "../../../Context/AuthContext"
import useConversation from "../../../Zustand/useConversation";
import formatDate from "../../../utils/formatDate";
const Message = ({message}) => {
 const{authUser}=  useAuthContext();
 const{selectedConversation} = useConversation();
 const fromMe= message.senderId===authUser._id;
 const chatClassname = fromMe?"chat-end":"chat-start";
 const profilepic = fromMe?authUser.profilepic:selectedConversation.profilepic;
 const bubblecolor = fromMe?"bg-emerald-800":"bg-zinc-950"
 const shakeClass = message.shouldShake?"shakes":""
 const date = new Date(message.createdAt);
 const dateString = formatDate(date);
  return (
    <div className="overflow-auto">
    <div className={`chat ${chatClassname} mr-5 ml-5 mt-1`}>
      <div className="chat-image avatar">
         <div className="w-10 rounded-full">
            <img src={profilepic} alt="" />
         </div>
      </div>
        <div className={`chat-bubble text-white ${bubblecolor} ${shakeClass}`}>{message.message}</div>
        <div className="chat-footer opacity-40 textarea-xs flex gap-1 items-center">{dateString}</div>
    </div>
 </div>
  )
}

export default Message