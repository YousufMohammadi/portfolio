import "../Styles/Components/Contact.css"
export function Contact() {
    return (
      <div className="contact-container">
        <div className="contact-section">
          <h2 className="section-heading">
            Got a project in <span>mind?</span>
          </h2>
          <img src="contact.png" alt="contact" className="contact-image"/>
        </div>
        <div className="contact-section">
          <form className="form-container">
            <div className="form-group">
              <p className="form-label">Your name</p>
              <input type="text" placeholder="name" className="form-input" />
            </div>
            <div className="form-group">
              <p className="form-label">Your email</p>
              <input type="text" placeholder="email" className="form-input" />
            </div>
            <div className="form-group">
              <p className="form-label">Your Message</p>
              <textarea
                placeholder="Message"
                className="form-message"
              ></textarea>
            </div>
            <button className="form-btn">
              Send Message <i class="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    );
}