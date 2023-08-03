import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../Assets/hero-01.jpg";
import "../Styles/basicInfo.css";

function BasicInfo() {
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      jobTitle,
      city,
      area,
      pincode,
      streetAddress,
    });

    setJobTitle("");
    setCity("");
    setArea("");
    setPincode("");
    setStreetAddress("");

    navigate("/include-details");
  };

  return (
    <div className="container">
      <h1 className="heading">Provide Basic Information</h1>
      <div className="image-container">
        <img src={heroImage} alt="Basic Info" className="image" />
      </div>
      <p>
        Job post will be in <strong>English</strong> in <strong>India</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2 className="job-title-heading">Job Title *</h2>
          <input
            type="text"
            className="input"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <h1 className="section-heading">
          Where do you want to advertise this job?
        </h1>
        <div className="form-group">
          <label className="label">City *</label>
          <input
            type="text"
            className="input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Area</label>
          <input
            type="text"
            className="input"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Pincode </label>
          <input
            type="text"
            className="input"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Street Address</label>
          <input
            type="text"
            className="input"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Save and Continue
        </button>
      </form>
      <Link to="/post-job" className="text-decoration-none">
        Go Back
      </Link>
    </div>
  );
}

export default BasicInfo;
