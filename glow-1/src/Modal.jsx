import React from "react";

const Modal = ({ handleClose }) => {
  return (
    <div className="outer-modal-box">
      <div className="modal-box-el">
        <div className="close-modal-btn" onClick={handleClose}>
          X
        </div>
        <div className="inner-modal-box">
          <h2>Demo Modal</h2>
          <p>This button could direct you to a specific option:</p>
          <ul>
            <li>Contact form</li>
            <li>Targeted product page</li>
            <li>Cart / basket</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
