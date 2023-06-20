import React from "react";
import { ParticlesApp } from "../particles/ParticlesApp";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section className="flex justify-center text-center items-center h-screen w-screen Roboto">
        <div className="flex flex-col items-start text-white font-bold text-5xl">
          <h1>Hi,</h1>
          <h1> My Name Is</h1>
          <div className="Roboto text-teal-500 font-bold">
            <Typewriter
              options={{
                strings: ["Kéalen Pillay."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <ParticlesApp />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
