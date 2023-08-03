import React from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../Assets/hero-01.jpg";
import "../Styles/reviewJobPost.css";

function ReviewJobPost({ jobTitle, jobDescription }) {
  const navigate = useNavigate();

  const handleSaveAndContinue = () => {
    // Logic to save the data and proceed to the next page (e.g., "JobPosted")
    navigate("/job-posted");
  };

  return (
    <div className="container">
      <div className="content-container">
        <div className="heading-container">
          <h1 className="heading">Review the job post</h1>
        </div>
        <div className="image-container">
          <img src={heroImage} alt="Job Description" className="image" />
        </div>
      </div>

      <div className="review-container">
        <h2>Job Title: {jobTitle}</h2>
        <h2>Job Description:</h2>
        <p>{jobDescription}</p>

        {/* Display other fields from previous pages */}
        {/* ... */}

        {/* Add a button to go back to the previous page */}
        <Link to="/application-reference" className="text-decoration-none">
          Go Back
        </Link>

        {/* Add a button to save and post the job */}
        <button
          type="submit"
          className="button"
          onClick={handleSaveAndContinue}
        >
          Confirm and Post Job
        </button>
      </div>
    </div>
  );
}

export default ReviewJobPost;
