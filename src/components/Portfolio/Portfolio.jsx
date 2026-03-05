import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Weather App",
    category: "Web App",
    tech: "React • OpenWeather API",
    github: "https://github.com/mithun0773/Weather-API.git",
    demo: "https://weather-api-port.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Auth Dashboard",
    category: "Fullstack",
    tech: "MERN • JWT • Redux",
    github: "https://github.com/mithun0773/auth-fullstack-dashboard.git",
    demo: "https://auth-dashboard-demo.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Job Analyzer",
    category: "Utility",
    tech: "React • REST API • ChartJS",
    github: "https://github.com/mithun0773/job-analyzer",
    demo: "https://auth-dashboard-demo.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, category, tech, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
              <div className="portfolio_item-category">{category}</div>
            </div>

            <div className="portfolio_item-content">
              <h3>{title}</h3>
              <p className="portfolio_tech">{tech}</p>

              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                {demo && (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
