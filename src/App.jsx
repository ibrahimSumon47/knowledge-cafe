import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Blog from "./component/Blog/Blog";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App md:mx-80 p-5">
      <Header></Header>
      <Blog />
      <ToastContainer />
    </div>
  );
}

export default App;
