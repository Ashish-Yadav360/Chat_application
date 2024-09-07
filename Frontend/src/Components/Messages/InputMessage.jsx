import { useState } from "react"
import {BsSend} from "react-icons/bs"
import useSendMessage from "../../../Hooks/useSendMessage";
const InputMessage = () => {
  const[message, setMessage]= useState('');
   const {loading,sendMessage}=  useSendMessage();
   const handleSumbit= async(e)=>{
      e.preventDefault();
       if(!message){
         return;
       }
      await sendMessage(message);
      setMessage('');
   }
  return (
    <form action="" onSubmit={handleSumbit} className=" px-20 my-3 absolute bottom-0 w-full">
        <div className="w-full relative">
            <input type="text" className="border text-sm rounded-lg block w-full p-4 bg-gray-700 border-gray-600 text-white" 
             placeholder="Send a Message"
             value={message}
             onChange={(e)=>setMessage(e.target.value)}
            />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                {loading?<span className="loading loading-spinner"></span>:<BsSend className="text-white"/>}
            </button>
        </div>

    </form>
  )
}

export default InputMessage