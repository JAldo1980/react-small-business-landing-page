import React, { useState } from "react";
import "./index.css";
import Toggle from "./Toggle";

export default function Nav() {
  function handleScrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  // Function to close the mobile menu and overlay
  function closeMobileMenu() {
    setIsActive(false);
  }

  return (
    <>
      <div className="nav-bar-el">
        <h1 className="glow-h1">GLOW</h1>
        <div className="mobile-menu-el">
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="desktop-btn-el">
          <button
            className="nav-btn linkedin-btn"
            onClick={() => handleScrollToSection("linkedin-scroll")}
          >
            LinkedIn Optimisation
          </button>
          <button
            className="nav-btn web-btn"
            onClick={() => handleScrollToSection("website-scroll")}
          >
            Websites
          </button>
        </div>
      </div>
      {isActive && (
        <div className="mobile-overlay overlay-visible">
          <div className="mobile-menu">
            <button
              className="nav-btn linkedin-btn"
              onClick={() => {
                handleScrollToSection("linkedin-scroll");
                closeMobileMenu(); // Close the mobile menu when the button is clicked
              }}
            >
              LinkedIn Optimisation
            </button>
            <button
              className="nav-btn web-btn"
              onClick={() => {
                handleScrollToSection("website-scroll");
                closeMobileMenu(); // Close the mobile menu when the button is clicked
              }}
            >
              Websites
            </button>
          </div>
        </div>
      )}
      <Toggle />
    </>
  );
}
