import React from "react";
import { FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  // Dynamic year for the copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="#home" className="footer__logo">
          Mithun <span>K</span>
        </a>

        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://github.com/mithun0773"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mithunk1"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://dribbble.com/mithunm7n"
            target="_blank"
            rel="noreferrer"
          >
            <FaDribbble />
          </a>
        </div>

        <div className="footer__copyright">
          <small>
            &copy; {currentYear} Mithun K. Built with Passion in Chennai.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
