import { useEffect } from "react";
import { useSocketContext } from "../Context/SocketContext"
import useConversation from "../Zustand/useConversation";
import audio from "../src/assets/notification.mp3"

const useMessageListener = () => {
    const {socket} = useSocketContext();
    const {messages,setMessages} = useConversation();
    useEffect(()=>{
        socket?.on('newMessage',(newMessage)=>{
             newMessage.shouldShake = true;
             const sound = new Audio(audio);
             sound.play();
            setMessages([...messages,newMessage]);
        })
        return ()=>socket?.off("newMessage");
    },[socket,setMessages,messages]);
}

export default useMessageListener