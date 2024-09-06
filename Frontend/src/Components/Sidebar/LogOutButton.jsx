import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../../Hooks/useLogout";

const LogOutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
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
    </div>
  );
};

export default LogOutButton;
