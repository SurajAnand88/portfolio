import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const name = useSelector((state) => state.name);
  console.log(name);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
