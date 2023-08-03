import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../Assets/hero-04.jpg";
import "../Styles/applicationReference.css";

function ApplicationReference() {
  const navigate = useNavigate();
  const [resumeOption, setResumeOption] = useState("");
  const [deadlineOption, setDeadlineOption] = useState("");
  const [dailyUpdatesEmail, setDailyUpdatesEmail] = useState("");
  const [individualEmailUpdate, setIndividualEmailUpdate] = useState(false);
  const [contactOption, setContactOption] = useState("");
  const [automaticRejectOption, setAutomaticRejectOption] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSaveAndContinue = () => {
    navigate("/review-jobpost");
  };

  return (
    <div className="container">
      <div className="content-container">
        <div className="heading-container">
          <h1 className="heading">Set application preferences</h1>
        </div>
        <div className="image-container">
          <img src={heroImage} alt="Job Description" className="image" />
        </div>
      </div>

      <div className="form-content">
        <h2 className="form-heading">
          Let applicants call you directly for this job
        </h2>
        <div className="form-field">
          <label>
            Mobile number *
            <input
              type="text"
              id="mobile-number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              placeholder="Enter mobile number"
            />
          </label>
        </div>
      </div>

      <div className="form-content">
        <h2 className="form-heading">
          Would you like people to submit a resume?*
        </h2>
        <div className="form-field">
          <label>
            <input
              type="radio"
              value="yes"
              checked={resumeOption === "yes"}
              onChange={() => setResumeOption("yes")}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={resumeOption === "no"}
              onChange={() => setResumeOption("no")}
            />
            No
          </label>
          <label>
            <input
              type="radio"
              value="optional"
              checked={resumeOption === "optional"}
              onChange={() => setResumeOption("optional")}
            />
            Optional
          </label>
        </div>
      </div>

      <div className="form-container">
        <div className="form-content">
          <h2 className="form-heading">Is there an application deadline?</h2>
          <div className="form-field">
            <label>
              <input
                type="radio"
                value="yes"
                checked={deadlineOption === "yes"}
                onChange={() => setDeadlineOption("yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={deadlineOption === "no"}
                onChange={() => setDeadlineOption("no")}
              />
              No
            </label>
          </div>
        </div>

        <div className="form-content">
          <h2 className="form-heading">Communication settings</h2>
          <div className="form-field">
            <label>
              Send daily updates about this job and applications to:*
            </label>
            <input
              type="email"
              value={dailyUpdatesEmail}
              onChange={(e) => setDailyUpdatesEmail(e.target.value)}
              placeholder="Enter email address"
            />
            <label>
              <input
                type="checkbox"
                checked={individualEmailUpdate}
                onChange={() =>
                  setIndividualEmailUpdate(!individualEmailUpdate)
                }
              />
              Also send an individual email update each time someone applies.
            </label>
          </div>
        </div>

        <div className="form-content">
          <h2 className="form-heading">Message settings</h2>
          <div className="form-field">
            <h5>
              Do you want to let candidates who apply for your job start the
              conversation?*
            </h5>
            <label>
              Allow candidates to contact you about their applications. Messages
              will be sent to the same email address you provided for daily
              updates.
            </label>
            <label>
              <input
                type="radio"
                value="yes"
                checked={contactOption === "yes"}
                onChange={() => setContactOption("yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={contactOption === "no"}
                onChange={() => setContactOption("no")}
              />
              No
            </label>
          </div>
        </div>

        <div className="form-content">
          <h2 className="form-heading">
            Do you want to automatically reject candidates who you don't
            interact with within the time you choose?*
          </h2>
          <div className="form-field">
            <label>
              <input
                type="radio"
                value="yes"
                checked={automaticRejectOption === "yes"}
                onChange={() => setAutomaticRejectOption("yes")}
              />
              Yes, automatically reject candidates on my behalf
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={automaticRejectOption === "no"}
                onChange={() => setAutomaticRejectOption("no")}
              />
              No, don't automatically reject candidates on my behalf
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="button" onClick={handleSaveAndContinue}>
        Save and Continue
      </button>
      <Link to="/add-compensation" className="text-decoration-none">
        Go Back
      </Link>
    </div>
  );
}

export default ApplicationReference;
