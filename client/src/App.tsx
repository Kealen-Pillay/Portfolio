import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      {/* <Projects /> */}
    </>
  );
}

export default App;
