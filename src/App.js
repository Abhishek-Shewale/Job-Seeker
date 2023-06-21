import React, { useState } from "react";
import "./Components/navbar.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Services = () => <h1>Services Page</h1>; // Changed from Service to Services
const Jobs = () => <h1>Jobs Page</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> // Changed from
        /service to /services
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
};

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h2>
            <span>J</span>ob
            <span>S</span>eeker
          </h2>
        </div>
        {/* 2nd menu part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default App;
