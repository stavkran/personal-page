import React from "react";
import './App.css';
import Intro from "./components/Intro";
import About from "./components/About"
import "./styles/global.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
      </div>
      <NavBar />
      </div>
  );
}

export default App;
