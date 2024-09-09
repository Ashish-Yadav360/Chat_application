import { useEffect } from 'react';
import { useAuthContext } from '../../../Context/AuthContext';
import useConversation from '../../../Zustand/useConversation';
import InputMessage from './InputMessage'
import SendMessage from './SendMessage'
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} =  useConversation();
  useEffect(()=>{
     //clean up function.
     return(
        setSelectedConversation(null)
     )
  },[setSelectedConversation])
  return (
    <div className="md:min-[450px] flex flex-col w-full relative">
      {!selectedConversation?(<NoChatSelected/>):(
        <>
        <div className="bg-emerald-600 px-4 py-2 mb-2">
         <span className="text-white" >To:</span> <span className="text-white w-full">{selectedConversation.fullname}</span>
        </div>
        <SendMessage/>
        <InputMessage/>
      </>
      ) }
    
    </div>
  )
}

export default MessageContainer

const NoChatSelected=()=>{
  const {authUser}=  useAuthContext();
  return(
    <div className='flex justify-center items-center w-full h-full'>
       <div className='px-4 tex-center text-gray-100 flex flex-col font-semibold text-3xl gap-2 justify-center items-center'>
          <p className='text-center'>Hello {authUser.fullname}</p>
          <p className='text-center'>Select a chat to Start Messaging</p>
          < TiMessages className='text-8xl text-emerald-600'/>
       </div>
    </div>
  )
}