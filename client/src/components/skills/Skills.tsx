import React from "react";
import {
  ReactOriginal,
  NodejsPlain,
  PythonPlain,
  JavaPlain,
  TypescriptPlain,
  NextjsLine,
  CsharpLine,
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
              <TypescriptPlain color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <ReactOriginal color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <NextjsLine color="#21807c" size="60" />
            </div>
          </div>
          <div className="flex flex-row space-x-2 mx-5 sm:mx-1">
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <PythonPlain color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <NodejsPlain color="#21807c" size="60" />
            </div>
            <div className="flex justify-center items-center h-28 w-28 bg-gray-50 hover:bg-[#1e1e1e] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
              <CsharpLine color="#21807c" size="60" />
            </div>
          </div>
        </div>
        <div className="block text-white font-bold mx-5 sm:text-lg sm:hidden">
          <p>
            I prefer using statically-typed languages such as TypeScript or C#.
            I typically use Next.js or React and have used both of these
            technologies in a professional production environment. I have used
            Python for academic purposes, in particular to develop a machine
            learning gesture recognition solution. For backend development, I
            lean towards using Node.js, Java, or .NET. Concerning database
            interactions, I opt for PostgreSQL and MongoDB.
          </p>
        </div>
        <div className="hidden text-white font-bold mx-5 sm:text-base sm:block md:mx-7 xl:text-xl xl:mr-10 2xl:text-2xl">
          <p className="sm:mb-5 2xl:mb-10">
            I prefer using statically-typed languages such as TypeScript or C#.
            I use Typescript for both the frontend and backend, alongside
            Next.js, React, and Node.js. Comparatively, I use C# with the .NET
            framework. I have used these technologies in a professional
            production environment, as well as for most of my personal
            prototyping.
          </p>
          <p className="2xl:mb-10">
            I have also used Python in machine learning and computer vision
            applications, such as developing a gesture recognition solution. For
            backend development, I lean towards using Node.js with Express or
            .NET. I typically lean towards the MERN stack, however, I have
            developed applications using the LAMP stack.
          </p>
          <p className="hidden 2xl:block">
            In a professional environment, I have performed full stack
            development using Typescript, React, Next.js, .NET 6, and Node.js. I
            have also worked in a professional environment using VueJS, Laravel,
            SQL, and MongoDB.
          </p>
        </div>
      </section>
    </>
  );
};

export default Skills;
