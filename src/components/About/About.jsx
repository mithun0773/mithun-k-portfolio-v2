import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import {
  FiMail,
  FiArrowRight,
  FiCode,
  FiZap,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

/* ── Custom Hook: useInView ── */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Optimization: stop observing once revealed
        }
      },
      { threshold },
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [ref, inView];
};

/* ── Data ── */
const STATS = [
  { num: "5+", label: "Production Projects", icon: <FiCode /> },
  { num: "MERN + AI", label: "Core Specialization", icon: <FiZap /> },
  { num: "2026", label: "MCA Graduate", icon: <FiTarget /> },
  { num: "15+", label: "Technologies Used", icon: <FiUsers /> },
];

const SKILLS = [
  { name: "React.js", pct: 90, color: "#4db5ff" },
  { name: "JavaScript", pct: 88, color: "#f6e05e" },
  { name: "Node.js", pct: 82, color: "#68d391" },
  { name: "Express.js", pct: 80, color: "#9f7aea" },
  { name: "MongoDB", pct: 78, color: "#48bb78" },
  { name: "REST APIs", pct: 84, color: "#f97316" },
  { name: "Gemini AI", pct: 72, color: "#818cf8" },
  { name: "Tailwind CSS", pct: 85, color: "#76e4f7" },
];

const TRAITS = [
  {
    icon: <FiCode />,
    title: "Full Stack Development",
    desc: "Building scalable MERN applications with responsive frontend interfaces and secure backend systems.",
  },
  {
    icon: <FiZap />,
    title: "AI Integration",
    desc: "Developing AI-powered applications using Gemini AI, RAG pipelines, vector embeddings, and prompt engineering.",
  },
  {
    icon: <FiUsers />,
    title: "Problem Solving",
    desc: "Focused on solving real-world problems through practical products, clean architecture, and efficient APIs.",
  },
  {
    icon: <FiTarget />,
    title: "Growth Mindset",
    desc: "Continuously learning modern technologies and improving development practices through hands-on projects.",
  },
];

const About = () => {
  // We use the hook here
  const [sectionRef, sectionVisible] = useInView(0.1);
  const [skillsRef, skillsVisible] = useInView(0.2);

  return (
    <section
      id="about"
      className={`about ${sectionVisible ? "abt-active" : ""}`}
      ref={sectionRef}
    >
      <div className="about__bg-dot" />
      <div className="about__bg-glow" />

      <div className="about__inner">
        <header className="about__header">
          <div className="about__label">
            <span className="about__label-line" />
            About Me
            <span className="about__label-line" />
          </div>
          <h2 className="about__title">
            Crafting experiences,{" "}
            <span className="about__title-grad">one line at a time</span>
          </h2>
        </header>

        <div className="about__grid">
          {/* Bio Section */}
          <div className="about__bio-card">
            <p>
              I'm <strong>Mithun K</strong>, an MCA student and aspiring{" "}
              <strong>Full Stack Developer</strong> from Chennai specializing in{" "}
              <strong>MERN stack</strong> and{" "}
              <strong>AI-integrated web applications</strong>.
            </p>

            <p>
              I have built and deployed multiple production-style projects
              including RAG-powered AI systems, authentication dashboards,
              economic analytics platforms, and resume analysis tools using
              React, Node.js, MongoDB, REST APIs, and Gemini AI.
            </p>

            <p>
              My focus is on building scalable applications with clean UI,
              secure backend architecture, and practical real-world
              functionality while continuously improving my problem-solving and
              system design skills.
            </p>

            <div className="about__bio-actions">
              <a href="#contact" className="btn btn--primary">
                <FiMail /> Let's Talk
              </a>

              <a href="#portfolio" className="btn btn--outline">
                View Projects <FiArrowRight />
              </a>
            </div>
          </div>

          {/* Traits Grid */}
          <div className="about__traits">
            {TRAITS.map((t, i) => (
              <div
                key={t.title}
                className="about__trait"
                style={{ "--delay": i }}
              >
                <div className="about__trait-icon">{t.icon}</div>
                <div className="about__trait-text">
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="about__stats">
          {STATS.map((s) => (
            <div key={s.label} className="about__stat">
              <div className="about__stat-icon">{s.icon}</div>
              <span className="about__stat-num">{s.num}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="about__skills-container" ref={skillsRef}>
          <h3 className="about__subheading">Technical Expertise</h3>
          <div className="about__skills-grid">
            {SKILLS.map((skill, i) => (
              <div key={skill.name} className="about__skill">
                <div className="about__skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.pct}%</span>
                </div>
                <div className="about__skill-track">
                  <div
                    className="about__skill-fill"
                    style={{
                      width: skillsVisible ? `${skill.pct}%` : "0%",
                      background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
