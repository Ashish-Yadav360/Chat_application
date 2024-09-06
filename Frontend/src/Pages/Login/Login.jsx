import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../Hooks/useLogin";
const Login = () => {
  const {loading, login } = useLogin();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({username,password});
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-2 min-h-screen ">
      <h1 className=" text-3xl text-white">LOGIN</h1>
      <form className="forums" onSubmit={handleSubmit}>
        <div>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow px-12"
              placeholder="Username"
              value={username}
              onChange={(e) =>setUserName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow px-12"
              placeholder="*********"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)}
            />
          </label>
        </div>
        <Link
          to={"/signup"}
          className=" text-white py-2 hover:text-emerald-500"
        >
          Don't have an account ?
        </Link>
        <div className="w-full">
          <button className="btn btn-outline w-full border-emerald-500" disabled={loading}>
            {loading ? <span className="loading-spinner loading"></span>:"Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
