import React, { useState } from "react";

function Toggle() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    document.body.style.backgroundColor = isActive ? "" : "white";
  }

  // Determine the text based on isActive
  const toggleText = isActive ? "Switch to Dark" : "Switch to Light";

  return (
    <div className="toggle-flex">
      <div className="toggle-info">{toggleText}</div>
      <div
        className={`toggle ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        <div className="inner-toggle"></div>
      </div>
    </div>
  );
}

export default Toggle;
