import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../Styles/register.css";
import workStatusExperience from "../Assets/work-status-experience.svg";
import workStatusFresher from "../Assets/work-status-fresher.svg";

function Register() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="heading">Sign-Up</div>
      <form action="">
        <div className="form-group">
          <label htmlFor="fullName" className="label">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="input"
            id="fullName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="input"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="input"
              id="password"
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contactNo" className="label">
            Contact Number
          </label>
          <input
            type="text"
            placeholder="Enter Contact Number"
            className="input"
            id="contactNo"
          />
        </div>
        <div className="form-group">
          <label className="label">Work Status</label>
          <div className="work-status">
            <div className="work-option">
              <label>
                <input
                  type="radio"
                  value="experienced"
                  checked={selectedOption === "experienced"}
                  onChange={handleOptionChange}
                />
                <img
                  src={workStatusExperience}
                  alt="Experience"
                  className="option-image"
                />
                <span className="option-label">
                  I'm experienced
                  <br />
                  <small className="option-label-text">
                    I have work experience (excluding internships)
                  </small>
                </span>
              </label>
            </div>
            <div className="work-option">
              <label>
                <input
                  type="radio"
                  value="fresher"
                  checked={selectedOption === "fresher"}
                  onChange={handleOptionChange}
                />
                <img
                  src={workStatusFresher}
                  alt="Fresher"
                  className="option-image"
                />
                <span className="option-label">
                  I'm a fresher
                  <br />
                  <small className="option-label-text">
                    I am a student/ Haven't worked after graduation
                  </small>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="currentCity" className="label">
            Current City
          </label>
          <input
            type="text"
            placeholder="Enter Current City"
            className="input"
            id="currentCity"
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume" className="label">
            Resume
          </label>
          <input type="file" id="resume" className="input" />
        </div>
        <button className="button">Sign Up</button>
        <Link to="/login" className="text-decoration-none">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
