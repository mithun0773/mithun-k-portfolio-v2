import { BsPatchCheckFill } from "react-icons/bs";
import "./Skills.css";

const Experience = () => {
  return (
    <section id="experience" className="skills">
      <h2 className="skills__title">Skills</h2>

      <div className="container experience_container">
        {/* FRONTEND */}
        <div className="experience_block">
          <h3>Frontend</h3>

          <div className="experience_content">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Bootstrap",
            ].map((skill) => (
              <article key={skill} className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small>Comfortable</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience_block">
          <h3>Backend</h3>

          <div className="experience_content">
            {[
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Python",
            ].map((skill) => (
              <article key={skill} className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small>Working Knowledge</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
