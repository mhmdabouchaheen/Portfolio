import "../styles/Home.css";
import profileImg from "../assets/profile.jpeg";
import { Link } from "react-router-dom";  // ✅ import Link

function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-image">
          <img src={profileImg} alt="Mohammad Abou Chaheen" />
        </div>

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
            <Link to="/projects" className="primary-btn">View Projects</Link>
            <Link to="/contact" className="secondary-btn">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
