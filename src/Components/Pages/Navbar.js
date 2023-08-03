import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      {/* 1st logo part */}
      <div className="logo">
        <h2>
          <span>J</span>ob
          <span>S</span>eeker
        </h2>
      </div>
      {/* 2nd menu part */}
      <div className="menu-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/post-job">Post-Job</Link>
          </li>
          <li>
            <Button
              component={Link}
              to="/login"
              color="default"
              variant="contained"
            >
              Login
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
