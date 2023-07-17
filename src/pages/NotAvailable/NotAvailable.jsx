import React from "react";
import NotAvailableMessage from "../../components/NotAvailableMessage/NotAvailableMessage";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './NotavailablePage.css'
function NotAvailable() {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
      <div className="message-container">
        <div className="message">
          <NotAvailableMessage />
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}

export default NotAvailable;
