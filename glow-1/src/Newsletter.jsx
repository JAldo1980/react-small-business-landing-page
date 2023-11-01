import React, { useState } from "react";
import "./index.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      // Email is valid, you can perform the subscription here
      alert("Subscribed with email: " + email);
      // You may want to send the email to a server for processing
    } else {
      // Email is not valid, show an error message
      setErrorMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="newsletter-el">
      <h2>Newsletter</h2>
      <p>Sign up to get the latest GLOW news and developments.</p>
      <div className="input-el-holder">
        <input
          className="input-text"
          type="text"
          placeholder="Add your email address..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMessage(""); // Clear error message on input change
          }}
        />
        <button className="input-btn" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
