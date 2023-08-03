import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/updateAndApply.css";
const UpdateAndApply = () => {
  const [resume, setResume] = useState(null);
  const [totalExperience, setTotalExperience] = useState("Fresher");
  const [keySkills, setKeySkills] = useState("");
  const [resumeHeadline, setResumeHeadline] = useState("");

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setResume(selectedFile);
  };

  const handleExperienceChange = (e) => {
    setTotalExperience(e.target.value);
  };

  const handleKeySkillsChange = (e) => {
    setKeySkills(e.target.value);
  };

  const handleResumeHeadlineChange = (e) => {
    setResumeHeadline(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/apply-confirmation");
  };

  return (
    <div className="update-apply-container">
      <h1>Quickly Review and update your Profile </h1>
      <form onSubmit={handleSubmit}>
        {/* Update New Resume field */}
        <div>
          <label>Update New Resume:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.rtf"
            onChange={handleFileUpload}
          />
        </div>

        <p>
          Supported Formats: doc, docx, pdf, rtf <br></br> Max file size: 2 MB
          <br></br> Preferred CV format - docx file
        </p>

        <div>
          <label>Total Experience : *</label>
          <select value={totalExperience} onChange={handleExperienceChange}>
            <option value="Fresher">Fresher</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="20+">20+</option>
          </select>
        </div>

        <div>
          <label>KeySkills : * </label>
          <input
            type="text"
            value={keySkills}
            onChange={handleKeySkillsChange}
          />
        </div>

        <div>
          <label>Resume Headline : *</label>
          <input
            type="text"
            value={resumeHeadline}
            onChange={handleResumeHeadlineChange}
          />
        </div>

        <button type="submit">Update And Apply</button>
      </form>

      <Link to="/jobs" className="link-back">
        Back to Jobs
      </Link>
    </div>
  );
};

export default UpdateAndApply;
