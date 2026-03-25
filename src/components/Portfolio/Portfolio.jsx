import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

/* ── Project data — 6 cards ── */
const PROJECTS = [
  {
    id: 1,
    image: IMG1,
    title: "Weather App",
    category: "Web App",
    filter: "frontend",
    description:
      "Real-time weather dashboard with city search, 5-day forecast, and dynamic backgrounds based on conditions.",
    tech: ["React", "OpenWeather API", "CSS3"],
    github: "https://github.com/mithun0773/Weather-API.git",
    demo: "https://weather-api-port.netlify.app/",
    featured: false,
    color: "#4db5ff",
  },
  {
    id: 2,
    image: IMG2,
    title: "Auth Dashboard",
    category: "Fullstack",
    filter: "fullstack",
    description:
      "Full-stack authentication system with JWT, role-based access, Redux state management, and a clean admin panel.",
    tech: ["MERN", "JWT", "Redux", "Tailwind"],
    github: "https://github.com/mithun0773/auth-fullstack-dashboard.git",
    demo: "https://auth-dashboard-demo.netlify.app",
    featured: true,
    color: "#7c3aed",
  },
  {
    id: 3,
    image: IMG3,
    title: "Job Analyzer",
    category: "Utility",
    filter: "frontend",
    description:
      "Analyzes job postings and visualizes skill demand trends using interactive Chart.js graphs and REST API data.",
    tech: ["React", "REST API", "Chart.js"],
    github: "https://github.com/mithun0773/job-analyzer",
    demo: "https://auth-dashboard-demo.netlify.app",
    featured: false,
    color: "#0fc4a7",
  },
  {
    id: 4,
    image: IMG1,
    title: "E-Commerce Store",
    category: "Fullstack",
    filter: "fullstack",
    description:
      "Complete shopping platform with cart management, Razorpay payment integration, and an admin product panel.",
    tech: ["MERN", "Razorpay", "Cloudinary"],
    github: "https://github.com/mithun0773",
    demo: "#",
    featured: true,
    color: "#f59e0b",
  },
  {
    id: 5,
    image: IMG2,
    title: "Chat Application",
    category: "Fullstack",
    filter: "fullstack",
    description:
      "Real-time messaging app with Socket.io rooms, online presence indicators, and end-to-end JWT security.",
    tech: ["MERN", "Socket.io", "JWT"],
    github: "https://github.com/mithun0773",
    demo: "#",
    featured: false,
    color: "#ec4899",
  },
  {
    id: 6,
    image: IMG3,
    title: "Portfolio v2",
    category: "Web App",
    filter: "frontend",
    description:
      "This very portfolio — built with React, featuring smooth animations, scroll-reveal, and a fully responsive layout.",
    tech: ["React", "CSS3", "Vercel"],
    github: "https://github.com/mithun0773",
    demo: "https://mithun-k-portfolio-v2.vercel.app",
    featured: false,
    color: "#4db5ff",
  },
];

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Fullstack" },
  { key: "frontend", label: "Frontend" },
];

/* ── useInView ── */
const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sectionRef, visible] = useInView(0.08);

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.filter === activeFilter);

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      {/* Ambient background */}
      <div className="pf__bg-orb pf__bg-orb--1" />
      <div className="pf__bg-orb pf__bg-orb--2" />
      <div className="pf__bg-dot" />

      <div className="pf__inner">
        {/* Header */}
        <div className={`pf__header ${visible ? "pf-reveal" : ""}`}>
          <div className="pf__label">
            <span className="pf__label-line" />
            My Work
            <span className="pf__label-line pf__label-line--r" />
          </div>
          <h2 className="pf__title">
            Things I've <span className="pf__title-grad">Built</span>
          </h2>
          <p className="pf__subtitle">
            A curated selection of projects — from full-stack applications to
            polished front-end experiences.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`pf__filters ${visible ? "pf-reveal pf-delay-1" : ""}`}>
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`pf__filter ${activeFilter === key ? "pf__filter--active" : ""}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
              {activeFilter === key && <span className="pf__filter-dot" />}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={`pf__grid ${visible ? "pf-reveal pf-delay-2" : ""}`}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className={`pf__footer ${visible ? "pf-reveal pf-delay-3" : ""}`}>
          <p>Want to see more?</p>
          <a
            href="https://github.com/mithun0773"
            target="_blank"
            rel="noreferrer"
            className="pf__github-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

/* ── Project Card ── */
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const {
    image,
    title,
    category,
    description,
    tech,
    github,
    demo,
    featured,
    color,
  } = project;

  return (
    <article
      className={`pf__card ${featured ? "pf__card--featured" : ""}`}
      style={{ "--card-color": color, animationDelay: `${index * 0.07}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {featured && <div className="pf__card-featured-badge">Featured</div>}

      {/* Image */}
      <div className="pf__card-img-wrap">
        <img src={image} alt={title} className="pf__card-img" />

        {/* Hover overlay */}
        <div
          className={`pf__card-overlay ${hovered ? "pf__card-overlay--visible" : ""}`}
        >
          <p className="pf__card-overlay-desc">{description}</p>
          <div className="pf__card-overlay-actions">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="pf__ov-btn pf__ov-btn--gh"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              Code
            </a>
            {demo && demo !== "#" && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="pf__ov-btn pf__ov-btn--live"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  width="15"
                  height="15"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Category pill */}
        <div className="pf__card-cat">{category}</div>
      </div>

      {/* Body */}
      <div className="pf__card-body">
        <h3 className="pf__card-title">{title}</h3>

        {/* Tech pills */}
        <div className="pf__card-tech">
          {tech.map((t) => (
            <span key={t} className="pf__tech-pill">
              {t}
            </span>
          ))}
        </div>

        {/* Bottom links */}
        <div className="pf__card-links">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="pf__link pf__link--gh"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            GitHub
          </a>
          {demo && demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="pf__link pf__link--live"
            >
              Live Demo
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="13"
                height="13"
              >
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="pf__card-accent" />
    </article>
  );
};

export default Portfolio;
