import React from "react";
import "../Styles/about.css";
import aboutImage from "../Assets/about-image.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Job Seeker</h1>
        <p>
          Job Seeker: The Ultimate Destination for Job Seekers. Explore a world
          of opportunities and take your career to new heights. With our
          user-friendly platform, you can effortlessly search for jobs, showcase
          your talents with a powerful resume builder, and gain valuable
          insights about companies. Join millions of successful job seekers who
          have found their dream jobs through Job Seeker. Don't wait, start your
          journey towards professional success today.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About" />
      </div>
    </div>
  );
}

export default About;
