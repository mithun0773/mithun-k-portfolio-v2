import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__title">About Me</h2>

      <div className="about__container">
        {/* LEFT CONTENT */}
        <div className="about__text">
          <p>
            I’m Mithun, an MCA student pursuing my degree through correspondence
            and an aspiring Junior Full Stack Developer.
          </p>

          <p>
            I build responsive and practical web applications using React,
            Node.js, Express, and MongoDB, with a focus on clean UI and solid
            backend logic.
          </p>

          <p>
            I’m actively looking for entry-level or software trainee roles where
            I can learn, contribute, and grow as a developer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let’s Talk
          </a>
        </div>

        {/* RIGHT CARDS */}
        <div className="about__cards">
          <div className="about__card">
            <h3>5+</h3>
            <p>Projects Built</p>
          </div>

          <div className="about__card">
            <h3>MERN</h3>
            <p>Stack Focus</p>
          </div>

          <div className="about__card">
            <h3>Git</h3>
            <p>Version Control</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
