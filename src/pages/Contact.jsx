import { useState } from "react";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you’d send data to backend/email service here
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        {/* Left side: Get in touch */}
        <div className="contact-info">
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-text">
            I’m very approachable and would love to speak to you.
            Feel free to call, send me an email, or simply complete the enquiry form.
          </p>

          <p className="contact-detail">📞 961-76056589</p>
          <p className="contact-detail">✉️ shaheen.mhmd98@gmail.com</p>

          {/* Professional links with icons */}
          <ul className="contact-links">
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" /> GitHub Profile
              </a>
            </li>
            <li>
              <a href="mailto:shaheen.mhmd98@gmail.com">
                <MdEmail className="icon" /> Email Address
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" /> LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: Form */}
        <div className="contact-form">
          <h2 className="form-title">Send me a message</h2>
          {submitted ? (
            <p className="success-message">✅ Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Your message" rows="6" required></textarea>
              <button type="submit" className="send-btn">Send message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
