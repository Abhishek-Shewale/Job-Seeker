import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../Assets/hero-02.jpg";
import "../Styles/includeDetails.css";

function IncludeDetails() {
  const [jobTypes, setJobTypes] = useState([]);
  const [jobSchedules, setJobSchedules] = useState([]);
  const [hasPlannedStartDate, setHasPlannedStartDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [hiringCount, setHiringCount] = useState("");
  const [hiringTimeline, setHiringTimeline] = useState("");

  const navigate = useNavigate();

  const handleJobTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setJobTypes((prevJobTypes) => [...prevJobTypes, value]);
    } else {
      setJobTypes((prevJobTypes) =>
        prevJobTypes.filter((type) => type !== value)
      );
    }
  };

  const handleJobScheduleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setJobSchedules((prevJobSchedules) => [...prevJobSchedules, value]);
    } else {
      setJobSchedules((prevJobSchedules) =>
        prevJobSchedules.filter((schedule) => schedule !== value)
      );
    }
  };

  const handleStartDateOptionChange = (e) => {
    setHasPlannedStartDate(e.target.value === "yes");
    setSelectedDate("");
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleHiringCountChange = (e) => {
    setHiringCount(e.target.value);
  };

  const handleHiringTimelineChange = (e) => {
    setHiringTimeline(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      jobTypes,
      jobSchedules,
      hasPlannedStartDate,
      selectedDate,
      hiringCount,
      hiringTimeline,
    });

    setJobTypes([]);
    setJobSchedules([]);
    setHasPlannedStartDate(false);
    setSelectedDate("");
    setHiringCount("");
    setHiringTimeline("");

    navigate("/add-compensation");
  };

  return (
    <div className="container">
      <div className="content-container">
        <div className="heading-container">
          <h1 className="heading">Include Details</h1>
        </div>
        <div className="image-container">
          <img src={heroImage} alt="Include Details" className="image" />
        </div>
      </div>
      <div className="job-type-container">
        <h1 className="job-type-heading">What is the job type? *</h1>
        <div className="options-container">
          <label className="option">
            <input
              type="checkbox"
              value="Full-time"
              checked={jobTypes.includes("Full-time")}
              onChange={handleJobTypeChange}
            />
            <span className="checkbox-label">Full-time</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="Regular / Permanent"
              checked={jobTypes.includes("Regular / Permanent")}
              onChange={handleJobTypeChange}
            />
            <span className="checkbox-label">Regular / Permanent</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="Fresher"
              checked={jobTypes.includes("Fresher")}
              onChange={handleJobTypeChange}
            />
            <span className="checkbox-label">Fresher</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="Part-time"
              checked={jobTypes.includes("Part-time")}
              onChange={handleJobTypeChange}
            />
            <span className="checkbox-label">Part-time</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="Internship"
              checked={jobTypes.includes("Internship")}
              onChange={handleJobTypeChange}
            />
            <span className="checkbox-label">Internship</span>
          </label>
        </div>
      </div>
      <div className="job-schedule-container">
        <h1 className="job-schedule-heading">
          What is the schedule for this job? *
        </h1>
        <div className="options-container">
          <label className="option">
            <input
              type="checkbox"
              value="Day shift"
              checked={jobSchedules.includes("Day shift")}
              onChange={handleJobScheduleChange}
            />
            <span className="checkbox-label">Day shift</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="Night shift"
              checked={jobSchedules.includes("Night shift")}
              onChange={handleJobScheduleChange}
            />
            <span className="checkbox-label">Night shift</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="Morning shift"
              checked={jobSchedules.includes("Morning shift")}
              onChange={handleJobScheduleChange}
            />
            <span className="checkbox-label">Morning shift</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="Rotational shift"
              checked={jobSchedules.includes("Rotational shift")}
              onChange={handleJobScheduleChange}
            />
            <span className="checkbox-label">Rotational shift</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="US shift"
              checked={jobSchedules.includes("US shift")}
              onChange={handleJobScheduleChange}
            />
            <span className="checkbox-label">US shift</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="Evening shift"
              checked={jobSchedules.includes("Evening shift")}
              onChange={handleJobScheduleChange}
            />
            <span className="checkbox-label">Evening shift</span>
          </label>
        </div>
      </div>
      <div className="planned-start-date-container">
        <h1 className="planned-start-date-heading">
          Is there a planned start date for this job?
        </h1>
        <div className="options-container">
          <label className="option">
            <input
              type="radio"
              value="yes"
              checked={hasPlannedStartDate}
              onChange={handleStartDateOptionChange}
            />
            <span className="radio-label">Yes</span>
          </label>
          <label className="option">
            <input
              type="radio"
              value="no"
              checked={!hasPlannedStartDate}
              onChange={handleStartDateOptionChange}
            />
            <span className="radio-label">No</span>
          </label>
        </div>
        {hasPlannedStartDate && (
          <div className="date-picker-container">
            <label htmlFor="start-date">Select a date:</label>
            <input
              type="date"
              id="start-date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        )}
      </div>
      <div className="hiring-count-container">
        <h1 className="hiring-count-heading">
          How many people do you want to hire for this opening? *
        </h1>
        <div className="options-container">
          <select
            value={hiringCount}
            onChange={handleHiringCountChange}
            className="hiring-count-select"
          >
            <option value="">Select an option</option>
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
            <option value="10+">10+</option>
            <option value="ongoing">I have an ongoing need to fill this</option>
          </select>
        </div>
      </div>
      <div className="hiring-timeline-container">
        <h1 className="hiring-timeline-heading">
          How quickly do you need to hire? *
        </h1>
        <div className="options-container">
          <select
            value={hiringTimeline}
            onChange={handleHiringTimelineChange}
            className="hiring-timeline-select"
          >
            <option value="">Select an option</option>
            <option value="1-7 days">1 to 7 days</option>
            <option value="1-2 weeks">1 to 2 weeks</option>
            <option value="2-4 weeks">2 to 4 weeks</option>
            <option value="more-than-4-weeks">More than 4 weeks</option>
          </select>
        </div>
      </div>
      <button type="submit" className="button" onClick={handleSubmit}>
        Save and Continue
      </button>
      <Link to="/basic-info" className="text-decoration-none">
        Go Back
      </Link>
    </div>
  );
}

export default IncludeDetails;
