import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUP from "./Pages/SignUP/SignUP";
const App = () => {
  return (
    <div className="flex min-h-screen">
      <Home/>
      {/* <SignUP /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
