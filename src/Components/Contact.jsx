import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../Styles/Components/Contact.css";
export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_67qigp6",
        "template_14jude3",
        form.current,
        "J9vzlCTUwtD2w08aG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container" id="contact">
      <div className="contact-section">
        <h2 className="section-heading">
          Got a project in <span>mind?</span>
        </h2>
        <img src="contact.png" alt="contact" className="contact-image" />
      </div>
      <div className="contact-section">
        <form className="form-container" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <p className="form-label">Your name</p>
            <input
              type="text"
              placeholder="name"
              className="form-input"
              name="user_name"
            />
          </div>
          <div className="form-group">
            <p className="form-label">Your email</p>
            <input
              type="text"
              placeholder="email"
              className="form-input"
              name="user_email"
            />
          </div>
          <div className="form-group">
            <p className="form-label">Your Message</p>
            <textarea placeholder="Message" className="form-message"></textarea>
          </div>
          <button className="form-btn" name="message">
            Send Message <i class="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
