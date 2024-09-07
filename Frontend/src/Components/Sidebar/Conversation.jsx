/* eslint-disable react/prop-types */

import useConversation from "../../../Zustand/useConversation";

// eslint-disable-next-line react/prop-types
const Conversation = ({conversation,emoji}) => {
 const {selectedConversation, setSelectedConversation} =  useConversation();
 const isSelected = selectedConversation?._id===conversation._id;
  return (
     <>
    <div className={`flex gap-2 items-center hover:bg-slate-800 rounded p-5 cursor-pointer py-4.5 ${isSelected?"bg-slate-800":""}`}
      onClick={()=>setSelectedConversation(conversation)}
    >
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={conversation.profilepic} />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
             <p className="font-bold text-white px-4">{conversation.fullname}</p>
              <span className="text-xl">{emoji}</span>
        </div>
      </div>
    </div>
     <div className="divider my-0 py-0 h-0 px-3"></div>
   </> 
  );
};

export default Conversation;
