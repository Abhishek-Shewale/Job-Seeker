import React from "react";
import Navbar from "./Components/Navbar";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">{children}</div>
    </div>
  );
}

export default MainLayout;
