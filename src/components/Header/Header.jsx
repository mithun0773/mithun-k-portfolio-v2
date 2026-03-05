import React from "react";
import "./Header.css";
import CV from "../../assets/mithuncv.pdf";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="container header__container">
        <div className="header__content">
          <h1 className="header__name">
            Hi, I'm <span>Mithun K</span> 👋
          </h1>

          <h2 className="header__role">Junior Full Stack Developer</h2>

          <p className="header__desc">
            I build responsive and scalable web applications using the{" "}
            <span>MERN Stack</span>
            and modern cloud technologies.
          </p>

          <div className="header__tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>REST API</span>
          </div>

          <div className="header__cta">
            <a href={CV} className="btn primary" download>
              Download Resume
            </a>
            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>

          <p className="header__location">
            📍 Chennai, India · Open to Full-Time Roles
          </p>
        </div>

        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
