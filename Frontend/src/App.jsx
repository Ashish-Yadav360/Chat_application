import { Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUP from "./Pages/SignUP/SignUP";
const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Signup' element={<SignUP/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;
