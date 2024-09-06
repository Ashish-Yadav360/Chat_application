import InputMessage from './InputMessage'
import SendMessage from './SendMessage'
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
  const noChatSelected=false;
  return (
    <div className="md:min-[450px] flex flex-col w-full relative">
      {noChatSelected?(<NoChatSelected/>):(
        <>
        <div className="bg-emerald-600 px-4 py-2 mb-2">
         <span className="text-white" >To:</span> <span className="text-white w-full">John Doe</span>
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
  return(
    <div className='flex justify-center items-center w-full h-full'>
       <div className='px-4 tex-center text-gray-100 flex flex-col font-semibold text-3xl gap-2 justify-center items-center'>
          <p className='text-center'>Hello John👋</p>
          <p className='text-center'>Select a chat to Start Messaging</p>
          < TiMessages className='text-8xl text-emerald-600'/>
       </div>
    </div>
  )
}