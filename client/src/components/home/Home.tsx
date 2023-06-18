import React from "react";
import { ParticlesApp } from "../particles/ParticlesApp";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section className="display-flex justify-center items-center">
        <div className="Roboto text-white font-bold">
          <h1>Hi, my name is Kéalen Pillay</h1>
          <h1>I am a</h1>
        </div>
        <div className="Roboto text-teal-500 font-bold">
          <Typewriter
            options={{
              strings: ["Software Engineer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <ParticlesApp />
      </section>
    </>
  );
};

export default Home;
