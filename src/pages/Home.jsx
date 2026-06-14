import "../styles/Home.css";

function Home() {
  return (
    <section className="home">
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
    </section>
  );
}

export default Home;
