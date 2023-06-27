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
        <h1 className="text-white font-bold text-5xl mx-5 my-10 sm:text-6xl sm:mx-3 sm:mt-14 sm:mb-14 md:text-7xl md:mx-7 lg:text-8xl xl:text-9xl">
          Skills
        </h1>
        <div className="flex flex-col mb-10 sm:items-center sm:flex-row sm:justify-center sm:mb-14 md:ml-7 md:justify-start">
          <div className="flex flex-row space-x-2 mx-5 mb-2 sm:mx-1 sm:mb-0">
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <JavaPlain color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <PythonPlain color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <TypescriptPlain color="#21807c" size="60" />
            </div>
          </div>
          <div className="flex flex-row space-x-2 mx-5 sm:mx-1">
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <ReactOriginal color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <NodejsPlain color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <GoPlain color="#21807c" size="60" />
            </div>
          </div>
        </div>
        <div className="block text-white font-bold mx-5 sm:text-lg sm:hidden">
          <p>
            I prefer using statically-typed languages such as Java or
            TypeScript. I typically use React with TypeScript and have used
            these technologies in a professional environment. I have also used
            Python for academic purposes, in particular machine learning and
            computer vision. For backend development, I lean towards using
            NodeJS or Go. I am a fan of using the MERN stack, however, I enjoy
            exploring new tech stacks as well.
          </p>
        </div>
        <div className="hidden text-white font-bold mx-5 sm:text-base sm:block md:mx-7 xl:text-xl xl:mr-10 2xl:text-2xl">
          <p className="sm:mb-5 2xl:mb-10">
            I prefer using statically-typed languages such as Java or
            TypeScript. I have used Java for many academic applications such as
            data structures and algorithms and smaller full stack prototypes
            with ApacheDB and SQL. I typically use React with TypeScript and
            have used these technologies in a professional environment as well
            as for most of my personal frontend endeavours and prototyping.
          </p>
          <p className="2xl:mb-10">
            I have also used Python for academic purposes, in particular machine
            learning and computer vision. For backend development, I lean
            towards using NodeJS with Express or Go. Go is a relatively new
            language that I am learning and enjoying. I am a fan of using the
            MERN stack, however, I enjoy exploring new tech stacks as well.
          </p>
          <p className="hidden 2xl:block">
            In a professional environment, I have performed full stack
            development using React with Typescript, Jotai state management
            library, .NET 6, MongoDB. I have also worked in a professional
            environment using VueJS, vuex state management, PHP, Laravel, SQL,
            and MongoDB.
          </p>
        </div>
      </section>
    </>
  );
};

export default Skills;
