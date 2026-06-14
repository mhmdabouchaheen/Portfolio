import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        {/* Left side graphic */}
        <div className="about-graphic">
          <div className="circle">
            <span className="initials">MA</span>
          </div>
          <div className="skills">
            <span>React</span>
            <span>Android</span>
            <span>iOS</span>
            <span>JS</span>
            <span>CSS</span>
            <span>SQL</span>
          </div>
        </div>

        {/* Right side text */}
        <div className="about-text-section">
          <h1 className="about-title">About Me</h1>
          <h2 className="about-subtitle">
            Mohammad Abou Chaheen <br />
            Computer Science Graduate · Beirut Arab University
          </h2>
          <p className="about-text">
            I’m a fresh CS graduate with hands-on experience in mobile and web
            development. I enjoy building things that work well and look good —
            from Android and iOS apps to React-powered web experiences. I’m
            driven by curiosity and always looking to grow into a well-rounded
            full-stack developer.
          </p>
          <a href="#portfolio" className="read-more">read more ↗</a>
        </div>
      </div>
    </div>
  );
}

export default About;
