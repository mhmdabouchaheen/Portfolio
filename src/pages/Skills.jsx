import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>

        <div className="skills-section">
          <h2 className="skills-category">Frontend Skills</h2>
          <ul>
            <li>Component-based development</li>
            <li>Responsive design</li>
            <li>API integration (conceptual)</li>
            <li>Clean code practices</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="skills-category">UI/UX Basics</h2>
          <ul>
            <li>Wireframing</li>
            <li>Accessibility awareness</li>
            <li>User-friendly layouts</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="skills-category">Problem Solving</h2>
          <ul>
            <li>Debugging</li>
            <li>Logical thinking</li>
            <li>Optimizing performance</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="skills-category">Team Collaboration</h2>
          <ul>
            <li>Version control (Git)</li>
            <li>Agile workflow</li>
            <li>Clear communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
