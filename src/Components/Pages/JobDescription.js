import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../Assets/hero-04.jpg";
import "../Styles/jobDescription.css";

function JobDescription() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isBoldSelected, setIsBoldSelected] = useState(false);
  const [isItalicSelected, setIsItalicSelected] = useState(false);
  const [isBulletSelected, setIsBulletSelected] = useState(false);

  const navigate = useNavigate();

  const handleTextChange = (e) => {};

  const handleBoldClick = () => {
    document.execCommand("bold");
    setIsBoldSelected(!isBoldSelected);
  };

  const handleItalicClick = () => {
    document.execCommand("italic");
    setIsItalicSelected(!isItalicSelected);
  };

  const handleBulletClick = () => {
    document.execCommand("insertUnorderedList");
    setIsBulletSelected(!isBulletSelected);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSaveAndContinue = () => {
    navigate("/application-reference");
  };

  return (
    <div className="container">
      <div className="content-container">
        <div className="heading-container">
          <h1 className="heading">Describe the job</h1>
        </div>
        <div className="image-container">
          <img src={heroImage} alt="Job Description" className="image" />
        </div>
      </div>

      <div className="text-field-container">
        <h2 className="text-field-heading">Job description*</h2>
        <p className="text-field-instruction">
          Describe the responsibilities of this job, required work experience,
          skills, or education.
        </p>

        <div className="upload-container">
          <label htmlFor="upload-file" className="upload-label">
            Upload a PDF or DOCX file
            <input
              type="file"
              id="upload-file"
              className="file-input"
              onChange={handleFileSelect}
            />
          </label>
        </div>
        {selectedFile && (
          <div className="file-info">Selected File: {selectedFile.name}</div>
        )}
        <div
          id="job-description"
          className="text-field-editor"
          contentEditable
          onInput={handleTextChange}
        ></div>
        <div className="text-field-controls">
          <button
            className={`control-button${isBoldSelected ? " selected" : ""}`}
            onClick={handleBoldClick}
            title="Bold"
          >
            B
          </button>
          <button
            className={`control-button${isItalicSelected ? " selected" : ""}`}
            onClick={handleItalicClick}
            title="Italic"
          >
            I
          </button>
          <button
            className={`control-button${isBulletSelected ? " selected" : ""}`}
            onClick={handleBulletClick}
            title="Bullet Point"
          >
            •
          </button>
        </div>
      </div>

      <button type="button" className="button" onClick={handleSaveAndContinue}>
        Save and Continue
      </button>
      <Link to="/add-compensation" className="text-decoration-none">
        Go Back
      </Link>
    </div>
  );
}

export default JobDescription;
