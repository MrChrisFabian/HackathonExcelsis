import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Component from "@/components/Component";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Component />
    </>
  );
}

export default App;
