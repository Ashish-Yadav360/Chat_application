import {Link } from "react-router-dom";
import GenderComp from "./GenderComp";
import { useState } from "react";
import useSignup from "../../../Hooks/useSignup";
import loginImage from "../../../utils/logins.png";


const SignUP = () => {
  const [inputs, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  function handleCheckBoxChange(gender) {
    setInput({ ...inputs, gender });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <h1 className="text-3xl text-white">SIGNUP</h1>
      <form className="forums" onSubmit={handleSubmit}>
        <div className="w-full">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow px-20 align placeholder:"
              placeholder="Full Name"
              value={inputs.fullname}
              onChange={(e) =>
                setInput({ ...inputs, fullname: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
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
              className="grow px-20"
              placeholder="Username"
              value={inputs.username}
              onChange={(e) =>
                setInput({ ...inputs, username: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
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
              className="grow px-20"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) =>
                setInput({...inputs, password: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
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
              className="grow px-20"
              placeholder="Confirm Password"
              value={inputs.confirmpassword}
              onChange={(e) =>
                setInput({ ...inputs, confirmpassword: e.target.value })
              }
            />
          </label>
        </div>
        <GenderComp
          onCheckboxChange={handleCheckBoxChange}
          selectedgender={inputs.gender}
        />
        <Link to={"/login"} className=" text-white py-2 hover:text-emerald-500">
          Already have an accout ?
        </Link>
        <button className="btn bg-emerald-900 border-none text-white hover:bg-emerald-600 w-full border-emerald-500" disabled={loading}>
        {loading ? (
              <span className="loading-spinner loading"></span>
            ) : (
              <div className="flex flex-row gap-2 items-center justify-center">
                <img src={loginImage} className="w-6 h-6" />
                <div className="text-center font-bold">Sign up</div>
              </div>
            )}
        
        </button>
      </form>
    </div>
  );
};

export default SignUP;
