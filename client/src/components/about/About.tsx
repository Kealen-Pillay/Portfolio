import React from "react";
import ProfilePic from "../../images/ProfilePic.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <>
      <section className="flex flex-col justify-start h-screen w-screen bg-[#1e1e1e] Roboto">
        <div className="flex flex-row justify-center items-center sm:justify-start">
          <img
            className="rounded-full w-44 h-44 mx-5 my-10 sm:mr-20 sm:ml-10"
            src={ProfilePic}
            alt="profile"
          />
          <div className="Roboto font-bold text-5xl">
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
        <div className="text-white px-5 sm:text-xl sm:px-10">
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
        <div className="flex flex-row px-5 sm:px-10">
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
      </section>
    </>
  );
};

export default About;
