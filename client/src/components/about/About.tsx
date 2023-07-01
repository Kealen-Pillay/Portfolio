import React from "react";
import ProfilePic from "../../images/ProfilePic.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <>
      <section className="flex flex-col justify-start h-screen w-screen bg-[#1e1e1e] Roboto">
        <div className="flex flex-row justify-center items-center sm:justify-start lg:mt-2 2xl:mb-10">
          <img
            className="rounded-full w-44 h-44 mx-5 my-10 sm:mr-20 sm:ml-10 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72"
            src={ProfilePic}
            alt="profile"
          />
          <div className="hidden sm:block Roboto font-bold sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl">
            <span className="text-white mr-1">I am a</span>
            <div className="hidden text-teal-500 sm:block">
              <Typewriter
                options={{
                  strings: [
                    "Engineer.",
                    "Developer.",
                    "Innovator.",
                    "Thinker.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="block text-white font-bold px-5 sm:text-xl sm:px-10 md:hidden">
          <p className="mb-5 sm:mb-10">
            I am a software engineer, with experience working in fintech and
            agritech domains. I have previously interned at companies such as
            Figured and Serko and have worked with a wide variety of languages
            and frameworks.
          </p>
          <p className="mb-5 sm:mb-10">
            I am passionate about full stack web development, with a focus
            towards implementing good software design and architecture.
          </p>
          <p className="mb-5 sm:mb-10">
            My goal is to contribute to software that positively impacts
            people's lives in a sustainable manner.
          </p>
        </div>
        <div className="hidden text-white font-bold px-5 sm:text-xl sm:px-10 md:block xl:text-2xl 2xl:text-3xl">
          <p className="mb-5 sm:mb-10">
            I am a software engineer, with experience working in fintech and
            agritech domains. I have previously interned at companies such as
            Figured and Serko and have worked with a wide variety of languages
            and frameworks. I am passionate about full stack web development,
            with a focus towards implementing good software design and
            architecture. My goal is to contribute to software that positively
            impacts people's lives in a sustainable manner.
          </p>
          <p className="mb-5 sm:mb-10">
            I enjoy working mostly on the backend side of an application, where
            my problem-solving and engineering mindset can best be employed. I
            enjoy exploring modern frameworks and technologies to understand how
            existing systems can be improved by adapting new tools.
          </p>
        </div>
        <div className="block flex flex-row px-5 sm:px-10 lg:hidden">
          <a
            href="https://www.linkedin.com/in/kealen-pillay-603306200/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <LinkedInIcon sx={{ color: "#ffffff", marginRight: 2 }} />
          </a>
          <a
            href="https://github.com/Kealen-Pillay"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <GitHubIcon sx={{ color: "#ffffff" }} />
          </a>
        </div>
        <div className="hidden flex flex-row px-5 sm:px-10 lg:block">
          <a
            href="https://www.linkedin.com/in/kealen-pillay-603306200/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <LinkedInIcon
              sx={{ color: "#ffffff", marginRight: 2 }}
              fontSize="large"
            />
          </a>
          <a
            href="https://github.com/Kealen-Pillay"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <GitHubIcon sx={{ color: "#ffffff" }} fontSize="large" />
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
