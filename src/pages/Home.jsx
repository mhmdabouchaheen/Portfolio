import "../styles/Home.css";
import profileImg from "../assets/profile.jpeg"; // put your image in /src/assets

function Home() {
  return (
    <section className="home">
      <div className="home-container">
        {/* Left side: profile image */}
        <div className="home-image">
          <img src={profileImg} alt="Mohammad Abou Chaheen" />
        </div>

        {/* Right side: intro text */}
        <div className="home-content">
          <p className="home-subtitle">Frontend Web Developer</p>
          <h1 className="home-title">
            Hi, I'm <span>Mohammad Abou Chaheen</span>
          </h1>
          <p className="home-description">
            Passionate about building modern, responsive and user-friendly web
            applications using React and JavaScript.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
