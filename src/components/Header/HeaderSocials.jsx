import React from "react";
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials flex gap-4 text-2xl">
      <a
        href="https://www.linkedin.com/in/mithunk1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="icon"/>
      </a>
      <a
        href="https://github.com/mithun0773"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://dribbble.com/mithunm7n"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Dribble"
      >
        <FaDribbble className="icon"/>
      </a>
    </div>
  );
};

export default HeaderSocials;
