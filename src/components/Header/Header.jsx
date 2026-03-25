import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import CV from "../../assets/mithuncv.pdf";
import HeaderSocials from "./HeaderSocials";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React Specialist",
  "Node.js Developer",
];

const TECH = [
  { label: "React", icon: "⚛" },
  { label: "Node.js", icon: "🟢" },
  { label: "Express", icon: "⚡" },
  { label: "MongoDB", icon: "🍃" },
  { label: "REST API", icon: "🔗" },
  { label: "Git", icon: "🐙" },
];

const Header = () => {
  const canvasRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  /* ── Entrance animation ── */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ── Typewriter ── */
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 55;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.3,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77,181,255,${p.alpha})`;
        ctx.fill();
      });

      /* Draw connections */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(77,181,255,${0.07 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <header className="header" id="home">
      {/* Particle canvas background */}
      <canvas ref={canvasRef} className="header__canvas" />

      {/* Ambient glow orbs */}
      <div className="header__orb header__orb--blue" />
      <div className="header__orb header__orb--purple" />

      {/* Grid overlay */}
      <div className="header__grid" />

      <div
        className={`container header__container ${visible ? "header--visible" : ""}`}
      >
        {/* ── Left: Main content ── */}
        <div className="header__content">
          {/* Status badge */}
          <div className="header__badge">
            <span className="header__badge-dot" />
            Available for full-time roles
          </div>

          {/* Name */}
          <h1 className="header__name">
            Hi, I'm <span className="header__name-highlight">Mithun K</span>
          </h1>

          {/* Typewriter role */}
          <div className="header__role-wrap">
            <span className="header__role-prefix">I'm a </span>
            <span className="header__role">{displayText}</span>
            <span className="header__cursor" />
          </div>

          {/* Description */}
          <p className="header__desc">
            I craft <em>responsive & scalable</em> web applications using the{" "}
            <em>MERN Stack</em> — turning complex problems into clean,
            user-centered digital experiences.
          </p>

          {/* Quick stats */}
          <div className="header__stats">
            <div className="header__stat">
              <span className="header__stat-num">5+</span>
              <span className="header__stat-label">Projects</span>
            </div>
            <div className="header__stat-divider" />
            <div className="header__stat">
              <span className="header__stat-num">1+</span>
              <span className="header__stat-label">Yr Exp</span>
            </div>
            <div className="header__stat-divider" />
            <div className="header__stat">
              <span className="header__stat-num">10+</span>
              <span className="header__stat-label">Skills</span>
            </div>
          </div>

          {/* Tech pills */}
          <div className="header__tech">
            {TECH.map(({ label, icon }) => (
              <span key={label} className="header__pill">
                <span className="header__pill-icon">{icon}</span>
                {label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="header__cta">
            <a href={CV} className="btn btn--primary" download>
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <a href="#contact" className="btn btn--outline">
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Let's Talk
            </a>
          </div>

          {/* Location */}
          <p className="header__location">
            <svg
              className="loc-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Chennai, India &nbsp;·&nbsp; Open to Remote &amp; On-site
          </p>
        </div>

        {/* ── Right: Profile card ── */}
        <div className="header__card">
          <div className="header__card-glow" />

          <div className="header__avatar">MK</div>

          <div className="header__card-name">Mithun K</div>
          <div className="header__card-role">Junior Full Stack Developer</div>

          <div className="header__card-divider" />

          <div className="header__card-rows">
            <div className="header__card-row">
              <div className="header__card-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <span className="header__card-key">Location</span>
                <strong className="header__card-val">Chennai, India</strong>
              </div>
            </div>
            <div className="header__card-row">
              <div className="header__card-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <span className="header__card-key">Stack</span>
                <strong className="header__card-val">MERN</strong>
              </div>
            </div>
            <div className="header__card-row">
              <div className="header__card-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <span className="header__card-key">Experience</span>
                <strong className="header__card-val">1+ Year</strong>
              </div>
            </div>
            <div className="header__card-row">
              <div className="header__card-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div>
                <span className="header__card-key">Focus</span>
                <strong className="header__card-val">Full Stack Dev</strong>
              </div>
            </div>
          </div>

          <HeaderSocials />

          <div className="header__avail">
            <span className="header__avail-dot" />
            Available for hire
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <a href="#about" className="header__scroll">
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
          <span className="scroll-label">Scroll</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
