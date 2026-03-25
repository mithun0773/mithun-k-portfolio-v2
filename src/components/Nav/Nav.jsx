import React, { useState, useEffect, useCallback } from "react";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./Nav.css";

const NAV_ITEMS = [
  { id: "#home", icon: IoMdHome, label: "Home" },
  { id: "#about", icon: FaUser, label: "About" },
  { id: "#experience", icon: BiBook, label: "Skills" },
  { id: "#portfolio", icon: RiServiceLine, label: "Work" },
  { id: "#contact", icon: BiMessageSquareDetail, label: "Contact" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const menuRef = React.useRef(null);

  /* ── Scroll: header shrink + scroll-spy ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);

    // Scroll spy — find which section is in view
    const sections = NAV_ITEMS.map(({ id }) =>
      document.querySelector(id),
    ).filter(Boolean);

    let current = "#home";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 160) {
        current = `#${sec.id}`;
      }
    });
    setActiveNav(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── Move sliding indicator to active item ── */
  useEffect(() => {
    if (!menuRef.current) return;
    const activeEl = menuRef.current.querySelector(".nav__link.active");
    if (activeEl) {
      const { offsetLeft, offsetWidth } = activeEl;
      setIndicator({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeNav]);

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        {/* Logo */}
        <a
          href="#home"
          className="nav__logo"
          onClick={() => handleNavClick("#home")}
        >
          <span className="nav__logo-mk">MK</span>
          <span className="nav__logo-text">
            Mithun<span className="nav__logo-accent">.</span>
          </span>
        </a>

        {/* Desktop menu */}
        <div className="nav__menu" ref={menuRef}>
          {/* Sliding pill indicator */}
          <span
            className="nav__indicator"
            style={{ left: indicator.left, width: indicator.width }}
          />

          {NAV_ITEMS.map(({ id, icon: Icon, label }) => (
            <a
              key={id}
              href={id}
              className={`nav__link${activeNav === id ? " active" : ""}`}
              onClick={() => handleNavClick(id)}
            >
              <Icon className="nav__link-icon" />
              <span className="nav__link-label">{label}</span>
            </a>
          ))}
        </div>

        {/* Right: CTA + hamburger */}
        <div className="nav__right">
          <a
            href="#contact"
            className="nav__hire"
            onClick={() => handleNavClick("#contact")}
          >
            <span>Hire Me</span>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M4 10h12M11 5l5 5-5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            className={`nav__burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav__drawer${menuOpen ? " nav__drawer--open" : ""}`}>
        <div className="nav__drawer-inner">
          {NAV_ITEMS.map(({ id, icon: Icon, label }) => (
            <a
              key={id}
              href={id}
              className={`nav__drawer-link${activeNav === id ? " active" : ""}`}
              onClick={() => handleNavClick(id)}
            >
              <span className="nav__drawer-icon">
                <Icon />
              </span>
              {label}
              {activeNav === id && <span className="nav__drawer-dot" />}
            </a>
          ))}
          <a
            href="#contact"
            className="nav__hire nav__hire--block"
            onClick={() => handleNavClick("#contact")}
          >
            <span>Hire Me</span>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M4 10h12M11 5l5 5-5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div className="nav__backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
