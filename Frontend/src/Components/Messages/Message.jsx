
const Message = () => {
  return (
    <div className="overflow-auto">
    <div className="chat chat-end mr-5">
      <div className="chat-image avatar">
         <div className="w-10 rounded-full">
            <img src="https://avatar.iran.liara.run/public/boy" alt="" />
         </div>
      </div>
        <div className="chat-bubble text-white bg-emerald-800"> Hey India what's New with you</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
 </div>
  )
}

export default Message