import React from "react";
import './App.css';
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Credits from "./components/Credits";
import "./styles/global.css";
import NavBar from "./components/NavBar";
import GalaxyBackground from './components/GalaxyBackground';

function App() {
  return (
    <div className="App">
      <div id="content">
        <GalaxyBackground />
        <Intro></Intro>
        
        
        <About></About>
        <Experience></Experience>
        {/* <Projects></Projects> */}
        {/* <Credits></Credits> */}
      </div>
      <NavBar />
      
      </div>
  );
}

export default App;
