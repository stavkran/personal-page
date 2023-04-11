import React from "react";
import './App.css';
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects"
import "./styles/global.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </div>
      <NavBar />
      </div>
  );
}

export default App;
