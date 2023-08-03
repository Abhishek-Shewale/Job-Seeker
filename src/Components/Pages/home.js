import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroImage1 from "../Assets/hero-01.jpg";
import heroImage2 from "../Assets/slider-img02.jpg";
import heroImage3 from "../Assets/slider-img03.jpg";
import heroImage4 from "../Assets/slider-img04.jpg";
import "../Styles/home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="home-container">
      <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
        <div>
          <img src={heroImage1} alt="slider 1" className="slider-image" />
        </div>
        <div>
          <img src={heroImage2} alt="slider 2" className="slider-image" />
        </div>
        <div>
          <img src={heroImage3} alt="slider 3" className="slider-image" />
        </div>
        <div>
          <img src={heroImage4} alt="slider 4" className="slider-image" />
        </div>
      </Carousel>
      <div className="content">
        <h1>Welcome to the Job Portal</h1>
        <p>Find your dream job today!</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Jobs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="options">
          <Link to="/jobs">Search Jobs</Link>
          <Link to="/post-job">Post Job</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
