import React from "react";
import { Link } from "react-router-dom";
import "../Styles/services.css";

function Services() {
  return (
    <div>
      <nav className="services-navbar">
        <ul className="menu">
          <li>
            <Link to="/why-us">Why Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>

      <div className="services-container">
        <h1 className="services-heading">Our Services</h1>
        <div className="service">
          <h2>Job Search</h2>
          <p>
            Our job portal provides an advanced job search functionality with
            various filters, making it easy for job seekers to find their dream
            jobs.
          </p>
        </div>

        <div className="service">
          <h2>Job Posting</h2>
          <p>
            Employers can post their job openings on our platform, reaching a
            wide audience of potential candidates.
          </p>
        </div>

        <div className="service">
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance? Contact our support team for
            prompt and helpful responses.
          </p>
        </div>

        <div className="service">
          <h2>Resume Database Access</h2>
          <p>
            Employers get access to our extensive resume database, allowing them
            to find the perfect candidates for their company.
          </p>
        </div>

        <div className="service">
          <h2>About Us</h2>
          <p>
            Learn more about our company and our mission to connect job seekers
            with great opportunities and help employers find the right
            candidates.
          </p>
        </div>
        <div className="service">
          <h2>Why Us</h2>
          <p>
            Discover why JobSeeker is the best platform for your job search. We
            provide advanced job search functionality, an extensive resume
            database, and a seamless application tracking system.
          </p>
        </div>
        <div className="service">
          <h2>Company Profiles</h2>
          <p>
            We create detailed profiles for companies, showcasing their
            information, culture, and job openings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
