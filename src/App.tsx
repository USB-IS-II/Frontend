import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [message, setMessage] = useState("Loading...");
  const request = async () => {
    const response = await fetch("http://127.0.0.1:4200/");
    const content = await response.text();
    setMessage(content);
  };
  useEffect(() => {
    setTimeout(() => request(), 3000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div dangerouslySetInnerHTML={{ __html: message }} />
      </header>
    </div>
  );
};

export default App;
