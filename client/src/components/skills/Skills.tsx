import React from "react";
import {
  ReactOriginal,
  NodejsPlain,
  PythonPlain,
  JavaPlain,
  TypescriptPlain,
  GoPlain,
} from "devicons-react";

const Skills = () => {
  return (
    <>
      <section className="flex flex-col h-screen w-screen Roboto bg-[#21807c]">
        <h1 className="text-white font-bold text-5xl mx-5 my-10">Skills</h1>
        <div className="flex flex-col mb-10">
          <div className="flex flex-row space-x-2 mx-5 mb-2">
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e]">
              <JavaPlain color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e]">
              <PythonPlain color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e]">
              <TypescriptPlain color="#21807c" size="60" />
            </div>
          </div>
          <div className="flex flex-row space-x-2 mx-5">
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e]">
              <ReactOriginal color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e]">
              <NodejsPlain color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e]">
              <GoPlain color="#21807c" size="60" />
            </div>
          </div>
        </div>
        <p className="text-white mx-5">
          I prefer using statically-typed languages such as Java or TypeScript.
          I typically use React with TypeScript and have used these technologies
          in a professional environment. I have also used Python for academic
          purposes, in particular machine learning and computer vision. For
          backend development, I lean towards using NodeJS or GO. I am a fan of
          using the MERN stack, however, I enjoy exploring new tech stacks as
          well.
        </p>
      </section>
    </>
  );
};

export default Skills;
