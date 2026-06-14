import "../styles/Contact.css";

function Contact() {
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

          {/* New professional links */}
          <ul className="contact-links">
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                🔗 GitHub Profile
              </a>
            </li>
            <li>
              <a href="mailto:shaheen.mhmd98@gmail.com">
                📧 Email Address
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: Form */}
        <div className="contact-form">
          <h2 className="form-title">Send me a message</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your message" rows="6" required></textarea>
            <button type="submit" className="send-btn">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
