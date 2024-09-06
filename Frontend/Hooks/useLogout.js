import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext"
import { useState } from "react";

const useLogout = () => {
  const{setAuthUser}= useAuthContext();
  const[loading,setLoading] = useState();
   const logout= async()=>{
       setLoading(true)
       try {
        const res = await fetch('/api/auth/logout',{
            method:"POST",
            headers :{"Content-Type": "application/json"},
        })
        const data = await res.json();
         if(data.error){
            throw new Error(data.error);
         }
         localStorage.setItem("chat-user",null);
         setAuthUser(null);
        
       } catch (error) {
         toast.error(error.meassage);
       }finally{
         setLoading(false);
       }

   }

   return {loading, logout}
}

export default useLogout;