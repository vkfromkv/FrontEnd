import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SampleText from "./components/SampleText.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SampleText />
    </>
  );
}

export default App;
