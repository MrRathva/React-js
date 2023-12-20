
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode Enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode Enable","success");
    }
  };
  return (
    <>
        <Navbar title="First Project" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          
         <TextForm showAlert = {showAlert} mode={mode} />
        </div>
    </>
  );
}

export default App;
