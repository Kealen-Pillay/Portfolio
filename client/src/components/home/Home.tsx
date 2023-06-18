import React from "react";
import { ParticlesApp } from "../particles/ParticlesApp";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section className="flex justify-center text-center items-center h-screen w-screen text-4xl">
        <div className="flex flex-col Roboto text-white font-bold">
          <h1>Hi, My Name Is</h1>
          <div className="Roboto text-teal-500 font-bold">
            <Typewriter
              options={{
                strings: ["Kéalen Pillay."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div>
          <ParticlesApp />
        </div>
      </section>
    </>
  );
};

export default Home;
