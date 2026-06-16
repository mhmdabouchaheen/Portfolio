import "../styles/HireMe.css";

function HireMe() {
  return (
    <section className="hireme">
      <div className="hireme-container">
        <h1 className="hireme-title">Why Companies Should Hire Me</h1>
        <p className="hireme-description">
          I bring a strong foundation in modern frontend development and a mindset focused on growth and reliability.
        </p>

        <ul className="hireme-list">
          <li>💡 Quick learner with real project experience</li>
          <li>🧩 Strong problem-solving skills and adaptability</li>
          <li>🗣️ Clear communicator and effective collaborator</li>
          <li>🖊️ Passionate about writing clean, maintainable code</li>
          <li>⚡ Reliable and committed to delivering quality results</li>
        </ul>

        {/* CV Buttons */}
        <div className="cv-buttons">
          <a href="\public\assets\Mohammadabouchaheen-cv (2).pdf" download className="cv-btn">
            📄 Download CV
          </a>
          <a
            href="\public\assets\Mohammadabouchaheen-cv (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            👀 Read CV Online
          </a>
        </div>
      </div>
    </section>
  );
}

export default HireMe;
