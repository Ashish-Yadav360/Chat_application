import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../../Zustand/useConversation";
import useGetConversation from "../../../Hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const[search,setSearch] = useState('');
        const{setSelectedConversation}=useConversation();
        const {conversations}= useGetConversation();
  const handleSubmit= (e)=>{
      e.preventDefault();
      if(!search){
        return;
      }else if(search.length<3){
         return toast.error("Enter more than 3 characters");
      }
    const conversation =  conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
       setSelectedConversation(conversation);
      setSearch('');
    }else{
      toast.error("No valid User found");
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit} className="flex  items-center gap-10 mt-2">
           <input type="text" placeholder="Search..." className="input input-bordered w-full max-w-xs px-20" 
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
           />
           <button type="submit" className="btn btn-circle bg-emerald-800 text-white m-5 border-none">
           <IoSearchSharp className="w-6 h-6 text-white" />
           </button>
        </form>
    </div>
  )
}

export default SearchInput