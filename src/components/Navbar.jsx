import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/technologies">Technologies</Link></li>
        <li><Link to="/hireme">Hire Me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? "🌞 Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
