import React from "react";
import "../Styles/contactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      <div className="contact-details">
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <span>Email:</span>
            <p>contact@jobseeker.com</p>
          </div>
          <div className="info-item">
            <span>Phone:</span>
            <p>+91 1234567890</p>
          </div>
          <div className="info-item">
            <span>Address:</span>
            <p>Satav Nagar Handewadi Road, Hadapsar, Pune, India 411028</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
