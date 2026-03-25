import React from "react";
import { FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import "./Footer.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Skills" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  {
    href: "https://github.com/mithun0773",
    Icon: FaGithub,
    label: "GitHub",
    color: "#e2e8f0",
  },
  {
    href: "https://www.linkedin.com/in/mithunk1",
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    color: "#0a66c2",
  },
  {
    href: "https://dribbble.com/mithunm7n",
    Icon: FaDribbble,
    label: "Dribbble",
    color: "#ea4c89",
  },
];

const TECH = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "Git",
  "REST API",
  "Vercel",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      {/* Top glow */}
      <div className="footer__glow" />
      <div className="footer__grid-bg" />

      <div className="footer__inner">
        {/* ── Top: CTA band ── */}
        <div className="footer__cta-band">
          <div className="footer__cta-text">
            <div className="footer__avail">
              <span className="footer__avail-dot" />
              Available for hire
            </div>
            <h2 className="footer__cta-heading">
              Let's build something{" "}
              <span className="footer__grad">great together</span>
            </h2>
            <p className="footer__cta-sub">
              Open to full-time roles, freelance projects, and exciting
              collaborations.
            </p>
          </div>
          <div className="footer__cta-actions">
            <a href="#contact" className="footer__btn footer__btn--primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get In Touch
            </a>
            <a
              href="mailto:mithun0773@gmail.com"
              className="footer__btn footer__btn--ghost"
            >
              mithun0773@gmail.com
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer__sep" />

        {/* ── Main grid ── */}
        <div className="footer__main">
          {/* Brand col */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-mk">MK</span>
              <span className="footer__logo-name">
                Mithun<span className="footer__logo-dot">.</span>
              </span>
            </a>
            <p className="footer__brand-tagline">
              Junior Full Stack Developer crafting clean, scalable web apps with
              the MERN Stack.
            </p>
            <div className="footer__location">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Chennai, India · Open to Remote
            </div>
          </div>

          {/* Nav col */}
          <div className="footer__nav-col">
            <h4 className="footer__col-heading">Navigation</h4>
            <ul className="footer__links">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer__link">
                    <span className="footer__link-arrow">→</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social col */}
          <div className="footer__social-col">
            <h4 className="footer__col-heading">Find Me On</h4>
            <div className="footer__socials">
              {SOCIALS.map(({ href, Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                  style={{ "--soc-color": color }}
                  aria-label={label}
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <h4 className="footer__col-heading footer__col-heading--mt">
              Stack
            </h4>
            <div className="footer__tech-pills">
              {TECH.map((t) => (
                <span key={t} className="footer__tech-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Mithun K · Built with
            <span className="footer__heart"> ♥ </span>
            in Chennai
          </p>
          <p className="footer__made">
            Designed &amp; Developed by{" "}
            <span className="footer__made-name">Mithun K</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
