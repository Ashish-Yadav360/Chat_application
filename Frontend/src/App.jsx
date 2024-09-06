import { Routes, Route, Navigate} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUP from "./Pages/SignUP/SignUP";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
const App = () => {
  const {authUser} =useAuthContext();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Routes>
        <Route path='/' element={authUser?<Home/>:<Login/>} />
        <Route path='/Signup' element={authUser? <Navigate to="/"/>: <SignUP/>} />
        <Route path='/Login' element={authUser?<Navigate to='/'/>: <Login/> } />
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
