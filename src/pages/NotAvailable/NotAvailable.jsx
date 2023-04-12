import React from "react";
import "../../Styles/main.css";
import NotAvailableMessage from "../../components/NotAvailableMessage/NotAvailableMessage";
import Navbar from "../../components/Navbar/Navbar";
function NotAvailable() {
  return (
    <>
      <Navbar />
      <div className="message-container">
        <div className="message">
          <NotAvailableMessage />
        </div>
      </div>
    </>
  );
}

export default NotAvailable;
