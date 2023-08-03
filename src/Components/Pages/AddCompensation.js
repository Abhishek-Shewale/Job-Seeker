import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../Assets/hero-03.jpg";
import "../Styles/addCompensation.css";

function AddCompensation() {
  const navigate = useNavigate();
  const [payDisplayMethod, setPayDisplayMethod] = useState("");
  const [minimumAmount, setMinimumAmount] = useState("");
  const [maximumAmount, setMaximumAmount] = useState("");
  const [rate, setRate] = useState("per-hour");
  const [supplementalPay, setSupplementalPay] = useState([]);
  const [benefits, setBenefits] = useState([]);

  const handlePayDisplayMethodChange = (e) => {
    setPayDisplayMethod(e.target.value);
  };

  const handleStartingAmountChange = (e) => {
    setMinimumAmount(e.target.value);
  };

  const handleExactAmountChange = (e) => {
    setMinimumAmount(e.target.value);
  };

  const handleMaximumAmountChange = (e) => {
    setMaximumAmount(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handleSupplementalPayChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSupplementalPay((prevSupplementalPay) => [
        ...prevSupplementalPay,
        value,
      ]);
    } else {
      setSupplementalPay((prevSupplementalPay) =>
        prevSupplementalPay.filter((pay) => pay !== value)
      );
    }
  };

  const handleBenefitsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setBenefits((prevBenefits) => [...prevBenefits, value]);
    } else {
      setBenefits((prevBenefits) =>
        prevBenefits.filter((benefit) => benefit !== value)
      );
    }
  };

  const handleSaveAndContinue = () => {
    navigate("/job-description");
  };

  return (
    <div className="container">
      <div className="content-container">
        <div className="heading-container">
          <h1 className="heading">Add Compensation</h1>
        </div>
        <div className="image-container">
          <img src={heroImage} alt="Add Compensation" className="image" />
        </div>
      </div>
      <div className="pay-display-method-container">
        <h1 className="pay-display-method-heading">
          What is the pay rate or range?
        </h1>
        <p className="show-pay-by-text">Show pay by</p>
        <div className="options-container">
          <select
            value={payDisplayMethod}
            onChange={handlePayDisplayMethodChange}
            className="pay-display-method-select"
          >
            <option value="">Select</option>
            <option value="range">Range</option>
            <option value="starting-amount">Starting amount</option>
            <option value="maximum-amount">Maximum amount</option>
            <option value="exact-amount">Exact amount</option>
          </select>
        </div>
      </div>
      {payDisplayMethod === "range" && (
        <div className="amount-range-container">
          <div className="amount-input-container">
            <label htmlFor="minimum-amount">Minimum</label>
            <div className="input-with-watermark">
              <input
                type="text"
                id="minimum-amount"
                value={minimumAmount}
                onChange={handleStartingAmountChange}
              />
              <span className="watermark">Rs</span>
            </div>
          </div>
          <div className="to-text">To</div>
          <div className="amount-input-container">
            <label htmlFor="maximum-amount">Maximum</label>
            <div className="input-with-watermark">
              <input
                type="text"
                id="maximum-amount"
                value={maximumAmount}
                onChange={handleMaximumAmountChange}
              />
              <span className="watermark">Rs</span>
            </div>
          </div>
          <div className="rate-container">
            <h1 className="rate-heading">Rate</h1>
            <div className="options-container">
              <select
                value={rate}
                onChange={handleRateChange}
                className="rate-select"
              >
                <option value="per-hour">Per hour</option>
                <option value="per-day">Per day</option>
                <option value="per-week">Per week</option>
                <option value="per-month">Per month</option>
                <option value="per-year">Per year</option>
              </select>
            </div>
          </div>
        </div>
      )}
      {payDisplayMethod === "starting-amount" && (
        <div className="amount-range-container">
          <div className="amount-input-container">
            <label htmlFor="starting-amount">Starting amount</label>
            <div className="input-with-watermark">
              <input
                type="text"
                id="starting-amount"
                value={minimumAmount}
                onChange={handleStartingAmountChange}
              />
              <span className="watermark">Rs</span>
            </div>
          </div>
          <div className="rate-container">
            <h1 className="rate-heading">Rate</h1>
            <div className="options-container">
              <select
                value={rate}
                onChange={handleRateChange}
                className="rate-select"
              >
                <option value="per-hour">Per hour</option>
                <option value="per-day">Per day</option>
                <option value="per-week">Per week</option>
                <option value="per-month">Per month</option>
                <option value="per-year">Per year</option>
              </select>
            </div>
          </div>
        </div>
      )}
      {payDisplayMethod === "exact-amount" && (
        <div className="amount-range-container">
          <div className="amount-input-container">
            <label htmlFor="exact-amount">Exact amount</label>
            <div className="input-with-watermark">
              <input
                type="text"
                id="exact-amount"
                value={minimumAmount}
                onChange={handleExactAmountChange}
              />
              <span className="watermark">Rs</span>
            </div>
          </div>
          <div className="rate-container">
            <h1 className="rate-heading">Rate</h1>
            <div className="options-container">
              <select
                value={rate}
                onChange={handleRateChange}
                className="rate-select"
              >
                <option value="per-hour">Per hour</option>
                <option value="per-day">Per day</option>
                <option value="per-week">Per week</option>
                <option value="per-month">Per month</option>
                <option value="per-year">Per year</option>
              </select>
            </div>
          </div>
        </div>
      )}
      {payDisplayMethod === "maximum-amount" && (
        <div className="amount-range-container">
          <div className="amount-input-container">
            <label htmlFor="maximum-amount">Maximum amount</label>
            <div className="input-with-watermark">
              <input
                type="text"
                id="maximum-amount"
                value={maximumAmount}
                onChange={handleMaximumAmountChange}
              />
              <span className="watermark">Rs</span>
            </div>
          </div>
          <div className="rate-container">
            <h1 className="rate-heading">Rate</h1>
            <div className="options-container">
              <select
                value={rate}
                onChange={handleRateChange}
                className="rate-select"
              >
                <option value="per-hour">Per hour</option>
                <option value="per-day">Per day</option>
                <option value="per-week">Per week</option>
                <option value="per-month">Per month</option>
                <option value="per-year">Per year</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="supplemental-pay-container">
        <h1 className="supplemental-pay-heading">
          Do you offer any of the following supplemental pay?
        </h1>
        <div className="options-container">
          <label className="option">
            <input
              type="checkbox"
              value="performance-bonus"
              checked={supplementalPay.includes("performance-bonus")}
              onChange={handleSupplementalPayChange}
            />
            <span className="checkbox-label">Performance bonus</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="yearly-bonus"
              checked={supplementalPay.includes("yearly-bonus")}
              onChange={handleSupplementalPayChange}
            />
            <span className="checkbox-label">Yearly bonus</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="quarterly-bonus"
              checked={supplementalPay.includes("quarterly-bonus")}
              onChange={handleSupplementalPayChange}
            />
            <span className="checkbox-label">Quarterly bonus</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="joining-bonus"
              checked={supplementalPay.includes("joining-bonus")}
              onChange={handleSupplementalPayChange}
            />
            <span className="checkbox-label">Joining bonus</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="overtime-pay"
              checked={supplementalPay.includes("overtime-pay")}
              onChange={handleSupplementalPayChange}
            />
            <span className="checkbox-label">Overtime pay</span>
          </label>
        </div>
      </div>
      <div className="benefits-container">
        <h1 className="benefits-heading">
          Are any of the following benefits offered?
        </h1>
        <div className="search-box-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search benefits"
          />
        </div>
        <div className="options-container">
          <label className="option">
            <input
              type="checkbox"
              value="health-insurance"
              checked={benefits.includes("health-insurance")}
              onChange={handleBenefitsChange}
            />
            <span className="checkbox-label">Health insurance</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="pf"
              checked={benefits.includes("pf")}
              onChange={handleBenefitsChange}
            />
            <span className="checkbox-label">Provident Fund (PF)</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="paid-sick-time"
              checked={benefits.includes("paid-sick-time")}
              onChange={handleBenefitsChange}
            />
            <span className="checkbox-label">Paid sick time</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="life-insurance"
              checked={benefits.includes("life-insurance")}
              onChange={handleBenefitsChange}
            />
            <span className="checkbox-label">Life insurance</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="flexible-schedule"
              checked={benefits.includes("flexible-schedule")}
              onChange={handleBenefitsChange}
            />
            <span className="checkbox-label">Flexible schedule</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="food-provided"
              checked={benefits.includes("food-provided")}
              onChange={handleBenefitsChange}
            />
            <span className="checkbox-label">Food provided</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="wfh"
              checked={benefits.includes("wfh")}
              onChange={handleBenefitsChange}
            />
            <span className="checkbox-label">Work from home (WFH)</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="paid-time-off"
              checked={benefits.includes("paid-time-off")}
              onChange={handleBenefitsChange}
            />
            <span className="checkbox-label">Paid time off</span>
          </label>
          <label className="option">
            <input
              type="checkbox"
              value="cell-phone-reimbursement"
              checked={benefits.includes("cell-phone-reimbursement")}
              onChange={handleBenefitsChange}
            />
            <span className="checkbox-label">Cell phone reimbursement</span>
          </label>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={handleSaveAndContinue}
        >
          Save and Continue
        </button>
        <Link to="/include-details" className="text-decoration-none">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default AddCompensation;
