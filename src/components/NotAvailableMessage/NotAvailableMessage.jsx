import React from "react";
import "./notAvailableMessage.css";
function NotAvailableMessage() {
  return (
    <>
      <div className="main-message">
        <h1>There was an error try again later</h1>
        <h2>
          Go Back to <a href="/homePage">Home Page</a>
        </h2>
      </div>
    </>
  );
}

export default NotAvailableMessage;
