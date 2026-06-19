import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      name: "Ahla Bhall Talleh",
      description: "An all-in-one tourisim website for lebanon .",
      technologies: ["React", "Asp.net", "MySQl"],
      github: "https://github.com/mostafaammar988040-cpu/Senior2.git",
      demo:null
    },
    {
      name: "Checkout-Flow",
      description: "A streamlined checkout process for e-commerce websites.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mhmdabouchaheen/checkout-Flow.git",
            demo:null

    },
    {
      name: "Weather Dashboard",
      description: "A weather app that fetches real-time data from an API and displays forecasts.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weatherdemo.com"
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-description">
          Here are some of the projects I’ve worked on. Each one highlights different skills and technologies.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
