import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Footer/>
        </>
    );
}

export default App;
