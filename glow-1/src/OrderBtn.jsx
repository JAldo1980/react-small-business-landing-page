import React, { useState } from "react";
import Modal from "./Modal";

function OrderBtn() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOrder = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="order-btn-el">
        <button className="order-btn" onClick={handleOrder}>
          Order
        </button>
      </div>
      {isModalOpen && <Modal handleClose={handleClose} />}
    </>
  );
}

export default OrderBtn;
