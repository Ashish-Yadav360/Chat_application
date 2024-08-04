import InputMessage from './InputMessage'
import SendMessage from './SendMessage'
const MessageContainer = () => {
  return (
    <div className="md:min-[450px] flex flex-col w-full relative">
    <>
      <div className="bg-emerald-600 px-4 py-2 mb-2">
       <span className="text-white" >To:</span> <span className="text-white w-full">John Doe</span>
      </div>
      <SendMessage/>
      <InputMessage/>
    </>



    </div>
  )
}

export default MessageContainer