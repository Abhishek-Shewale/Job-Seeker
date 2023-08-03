import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Jobs from "./Components/Pages/Jobs";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import PostJob from "./Components/Pages/PostJob";
import WhyUs from "./Components/Pages/WhyUs";
import About from "./Components/Pages/About";
import ContactUs from "./Components/Pages/ContactUs";
import BasicInfo from "./Components/Pages/BasicInfo";
import IncludeDetails from "./Components/Pages/IncludeDetails";
import AddCompensation from "./Components/Pages/AddCompensation";
import JobDescription from "./Components/Pages/JobDescription";
import ApplicationReference from "./Components/Pages/ApplicationReference";
import ReviewJobPost from "./Components/Pages/ReviewJobPost";
import Footer from "./Components/Pages/Footer";
import UpdateAndApply from "./Components/Pages/UpdateAndApply";
import ApplyConfirmation from "./Components/Pages/ApplyConfirmation";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/basic-info" element={<BasicInfo />} />
        <Route path="/include-details" element={<IncludeDetails />} />
        <Route path="/add-compensation" element={<AddCompensation />} />
        <Route path="/job-description" element={<JobDescription />} />

        <Route
          path="/application-reference"
          element={<ApplicationReference />}
        />
        <Route path="/review-jobpost" element={<ReviewJobPost />} />
        <Route path="/update-and-apply" element={<UpdateAndApply />} />
        <Route path="/apply-confirmation" element={<ApplyConfirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
