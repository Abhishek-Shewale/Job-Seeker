import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/postjob.css";

const PostJob = () => {
  const [companyName, setCompanyName] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [hrFirstName, setHrFirstName] = useState("");
  const [hrLastName, setHrLastName] = useState("");
  const [hrContact, setHrContact] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      companyName,
      employeeCount,
      hrFirstName,
      hrLastName,
      hrContact,
      industryType,
      companyAddress,
    });

    setCompanyName("");
    setEmployeeCount("");
    setHrFirstName("");
    setHrLastName("");
    setHrContact("");
    setIndustryType("");
    setCompanyAddress("");

    navigate("/basic-info");
  };

  return (
    <div className="container">
      <h1 className="heading">Post a Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Company Name:</label>
          <input
            type="text"
            className="input"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Number of Employees:</label>
          <input
            type="number"
            className="input"
            value={employeeCount}
            onChange={(e) => setEmployeeCount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">HR's First Name:</label>
          <input
            type="text"
            className="input"
            value={hrFirstName}
            onChange={(e) => setHrFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">HR's Last Name:</label>
          <input
            type="text"
            className="input"
            value={hrLastName}
            onChange={(e) => setHrLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">HR's Contact:</label>
          <input
            type="text"
            className="input"
            value={hrContact}
            onChange={(e) => setHrContact(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Industry Type:</label>
          <select
            className="select"
            value={industryType}
            onChange={(e) => setIndustryType(e.target.value)}
          >
            <option value="">Select industry type</option>
            <option value="IT">IT</option>
            <option value="Marketing and Advertising">
              Marketing and Advertising
            </option>
            <option value="Finance and Accounting">
              Finance and Accounting
            </option>
            <option value="Sales and Business Development">
              Sales and Business Development
            </option>
            <option value="Healthcare and Medical">
              Healthcare and Medical
            </option>
            <option value="Education and Teaching">
              Education and Teaching
            </option>
            <option value="Design and Creative">Design and Creative</option>
            <option value="Hospitality and Tourism">
              Hospitality and Tourism
            </option>
            <option value="Human Resources">Human Resources</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">Company Address:</label>
          <textarea
            className="textarea"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostJob;
