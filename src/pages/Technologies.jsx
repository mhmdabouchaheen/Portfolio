import "../styles/Technologies.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

function Technologies() {
  return (
    <section className="technologies">
      <div className="tech-container">
        <h1 className="tech-title">Technologies & Tools</h1>
        <p className="tech-description">
          Here are the technologies and tools I use to build modern, responsive, and user-friendly applications.
        </p>

        <div className="tech-grid">
          <div className="tech-item"><FaHtml5 className="tech-icon html" /> HTML</div>
          <div className="tech-item"><FaCss3Alt className="tech-icon css" /> CSS</div>
          <div className="tech-item"><FaJs className="tech-icon js" /> JavaScript</div>
          <div className="tech-item"><FaReact className="tech-icon react" /> React</div>
          <div className="tech-item"><SiTailwindcss className="tech-icon tailwind" /> Tailwind</div>
          <div className="tech-item"><SiBootstrap className="tech-icon bootstrap" /> Bootstrap</div>
          <div className="tech-item"><FaGitAlt className="tech-icon git" /> Git</div>
          <div className="tech-item"><FaGithub className="tech-icon github" /> GitHub</div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
