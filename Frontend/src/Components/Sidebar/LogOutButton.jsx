import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../../Hooks/useLogout";
import { useAuthContext } from "../../../Context/AuthContext";

const LogOutButton = () => {
   const{authUser}= useAuthContext();
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto flex flex-row justify-between">
      {" "}
      {loading ? (
        <span className="laoding loading-spinner"></span>
      ) : (
        <RiLogoutBoxLine
          onClick={logout}
          type="submit"
          className="w-6 h-6 text-white cursor-pointer"
        />
      )}
       <div className="flex flex-row justify-between text-center align-middle gap-5">
          <img className="w-7 h-7" src={authUser.profilepic} alt="mypic" />
           <p className="text-white font-extrabold mr-2">{authUser.fullname}</p>
       </div>
    </div>
  );
};

export default LogOutButton;
