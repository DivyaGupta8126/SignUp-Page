import "./App.css";
import React from "react";
import Top from "./components/Top/Top";
import Home from "./components/Home/Home";
import Bottom from "./components/Bottom/Bottom";

function App() {
  return (
    <div className="App">
      <Top />
      <Home />
      <Bottom />
    </div>
  );
}

export default App;
