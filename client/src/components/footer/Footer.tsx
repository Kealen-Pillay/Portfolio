import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <>
      <section className="flex flex-row h-10 w-screen bg-[#2e2e2e] items-center justify-between">
        <div className="flex flex-row px-5">
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
        <div className="px-5 text-white Roboto">
          <h3>Kealen Pillay {year}</h3>
        </div>
      </section>
    </>
  );
};

export default Footer;
