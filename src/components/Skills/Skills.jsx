import { BsPatchCheckFill } from "react-icons/bs";
import "./Skills.css";

const Experience = () => {
  return (
    <section id="experience" className="skills">
      <h5>My Technical Level</h5>
      <h2 className="skills__title">Skills</h2>

      <div className="container experience_container">
        {/* FRONTEND */}
        <div className="experience_block">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            {[
              { name: "HTML5", level: "Experienced" },
              { name: "CSS3", level: "Experienced" },
              { name: "JavaScript (ES6+)", level: "Experienced" },
              { name: "TypeScript", level: "Intermediate" },
              { name: "React.js", level: "Experienced" },
              { name: "Tailwind CSS", level: "Experienced" },
              { name: "Bootstrap", level: "Intermediate" },
              { name: "Chart.js", level: "Intermediate" },
              { name: "Responsive Design", level: "Experienced" },
            ].map((skill) => (
              <article key={skill.name} className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />

                <div>
                  <h4>{skill.name}</h4>
                  <small>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience_block">
          <h3>Backend Development</h3>

          <div className="experience_content">
            {[
              { name: "Node.js", level: "Intermediate" },
              { name: "Express.js", level: "Intermediate" },
              { name: "REST APIs", level: "Intermediate" },
              { name: "Middleware", level: "Working Knowledge" },
              { name: "MongoDB", level: "Intermediate" },
              { name: "PostgreSQL", level: "Working Knowledge" },
              { name: "MySQL", level: "Working Knowledge" },
              { name: "JWT Authentication", level: "Intermediate" },
              { name: "Session Management", level: "Working Knowledge" },
              { name: "Role-Based Access", level: "Working Knowledge" },
              { name: "Input Validation", level: "Working Knowledge" },
              { name: "Rate Limiting", level: "Working Knowledge" },
              { name: "Python", level: "Intermediate" },
            ].map((skill) => (
              <article key={skill.name} className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />

                <div>
                  <h4>{skill.name}</h4>
                  <small>{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* AI & TOOLS */}
        <div className="experience_block">
          <h3>AI & Tools</h3>

          <div className="experience_content">
            {[
              { name: "Gemini AI", level: "Intermediate" },
              { name: "Prompt Engineering", level: "Intermediate" },
              { name: "RAG Pipelines", level: "Working Knowledge" },
              { name: "Vector Embeddings", level: "Working Knowledge" },
              { name: "Cosine Similarity", level: "Working Knowledge" },
              { name: "Git", level: "Intermediate" },
              { name: "GitHub", level: "Intermediate" },
              { name: "Vercel", level: "Intermediate" },
              { name: "Render", level: "Working Knowledge" },
              { name: "Netlify", level: "Intermediate" },
              { name: "VS Code", level: "Experienced" },
            ].map((skill) => (
              <article key={skill.name} className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />

                <div>
                  <h4>{skill.name}</h4>
                  <small>{skill.level}</small>
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
