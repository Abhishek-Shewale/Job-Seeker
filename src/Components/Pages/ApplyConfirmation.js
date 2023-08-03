import React from "react";
import { Link } from "react-router-dom";
import "../Styles/applyConfirmation.css";
import confirmationImage from "../Assets/apply-confirmation.jpg"; 

const ApplyConfirmation = () => {
  return (
    <div className="apply-confirmation-container">
      <img src={confirmationImage} alt="Confirmation" />
      <h1>Application Submitted!</h1>
      <p>Your application has been successfully submitted.</p>
      <p>You will get an email confirmation at your registered email.</p>
      <Link to="/jobs">Back to Jobs</Link>
    </div>
  );
};

export default ApplyConfirmation;
