import { useEffect, useRef } from "react";
import useGetMessages from "../../../Hooks/useGetMessages";
import Message from "./Message";
import useMessageListener from "../../../Hooks/useMessageListener";
const SendMessage = () => {
  const {loading,messages} = useGetMessages();
  useMessageListener();
   const lastMessageref = useRef();
    console.log("MESSAGES",messages);
    console.log(messages.map(message=>message._id));
    useEffect(()=>{
      setTimeout(() => {
          lastMessageref.current?.scrollIntoView({behavior:"smooth"});
      }, 100);
    },[messages])
  return (
    <div className="message-container p-2 overflow-auto">
       {!loading && messages.length>0 && messages.map((message)=>(
           <div key={message._id} ref={lastMessageref}>
             <Message message={message}/>
           </div>
       ))}
       {!loading && messages.length===0 && (<p className="text-center text-white">Send Message to Start Conversation</p>)}
        {loading ? <div className="loading loading-spinner text-3xl align-middle text-center flex justify-center text-white"></div>:""}

    </div>
  );
};

export default SendMessage;

