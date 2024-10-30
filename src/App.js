import React from "react";
import './App.css';
//import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Certifications from "./components/Certifications";
// import Credits from "./components/Credits";
//mport "./styles/global.css";
// import NavBar from "./components/NavBar";
//import BackgroundModel from "./components/backgroundModel";
import BackgroundModel from "./components/backgroundModel";

function App() {
  return (
    <div className="App">
      <div id="content" style={{ position: 'relative', zIndex: 1 }}>
        <About />
        <Experience/>
        
      </div>
      {/* <NavBar /> */}
      {/* <BackgroundModel style={{ position: 'fixed', zIndex: -1 }}></BackgroundModel> */}
    </div>
  );
}

export default App;
