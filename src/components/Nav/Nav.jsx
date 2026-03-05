import React, { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./Nav.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [scroll, setScroll] = useState(false);

  // Add background blur on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const navItems = [
    { id: "#home", icon: <IoMdHome />, label: "Home" },
    { id: "#about", icon: <FaUser />, label: "About" },
    { id: "#experience", icon: <BiBook />, label: "Skills" },
    { id: "#portfolio", icon: <RiServiceLine />, label: "Portfolio" },
    { id: "#contact", icon: <BiMessageSquareDetail />, label: "Contact" },
  ];

  return (
    <nav className={scroll ? "nav glass" : "nav"}>
      <div className="nav__logo">
        <h3>
          Mithun <span>K</span>
        </h3>
      </div>

      <div className="nav__menu">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.id}
            onClick={() => setActiveNav(item.id)}
            className={activeNav === item.id ? "active" : ""}
          >
            {item.icon} <span className="nav__label">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="nav__cta">
        <a href="#contact" className="hire__btn">
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
