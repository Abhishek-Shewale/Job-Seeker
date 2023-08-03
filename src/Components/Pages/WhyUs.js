import React from "react";
import "../Styles/whyUs.css";
import {
  FaStar,
  FaUsers,
  FaHandshake,
  FaMoneyBill,
  FaCheck,
  FaDesktop,
  FaBriefcase,
} from "react-icons/fa";

function WhyUs() {
  return (
    <div className="why-us-container">
      <h1>Why Job Seeker</h1>
      <div className="reasons">
        <div className="reason">
          <FaStar color="rgba(103, 68, 208, 1)" size={40} />
          <h2>Quality Service</h2>
          <p>
            We are committed to providing top-notch quality service to our
            clients. Our team of experts ensures that each project is executed
            with utmost precision and attention to detail.
          </p>
        </div>
        <div className="reason">
          <FaUsers color="rgba(103, 68, 208, 1)" size={40} />
          <h2>Expert Team</h2>
          <p>
            Our team consists of highly skilled and experienced professionals
            who are passionate about their work. With their expertise and
            industry knowledge, we deliver exceptional results for our clients.
          </p>
        </div>
        <div className="reason">
          <FaHandshake color="rgba(103, 68, 208, 1)" size={40} />
          <h2>Customer Satisfaction</h2>
          <p>
            Customer satisfaction is our utmost priority. We strive to
            understand our clients' needs and provide tailored solutions that
            exceed their expectations. We value long-term relationships and aim
            to build trust through our exceptional service.
          </p>
        </div>
        <div className="reason">
          <FaMoneyBill color="rgba(103, 68, 208, 1)" size={40} />
          <h2>Competitive Pricing</h2>
          <p>
            We offer competitive pricing without compromising on the quality of
            our services. We understand the importance of cost-effectiveness and
            strive to deliver value for our clients' investment.
          </p>
        </div>
        <div className="reason">
          <FaCheck color="rgba(103, 68, 208, 1)" size={40} />
          <h2>The right fit for your jobs</h2>
          <p>
            250 million people visit Indeed every month, giving you access to
            the most talent in every field.
          </p>
        </div>
        <div className="reason">
          <FaDesktop color="rgba(103, 68, 208, 1)" size={40} />
          <h2>On desktop and mobile</h2>
          <p>
            75% of job searches are from mobile devices. Use Indeed to provide
            the best job search experience anywhere.
          </p>
        </div>

        <div className="reason">
          <FaBriefcase color="rgba(103, 68, 208, 1)" size={40} />
          <h2>More quality hires</h2>
          <p>Job Seeker is the #1 external source of hire.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
