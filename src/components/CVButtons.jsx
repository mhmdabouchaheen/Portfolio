function CVButtons() {
  return (
    <div className="cv-buttons">
     
      <a href="/assets/Mohammad_CV.pdf" download className="cv-btn">
        📄 Download CV
      </a>

      
      <a
        href="/assets/Mohammad_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-btn"
      >
        👀 Read CV Online
      </a>
    </div>
  );
}

export default CVButtons;
