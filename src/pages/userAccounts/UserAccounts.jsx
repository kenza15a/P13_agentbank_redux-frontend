import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Account from "../../components/Account/Account";

import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import EditForm from "../../components/EditForm/EditForm";
export default function UserAccounts() {
 // const isShown = useSelector((state) => state.edit.isShown);

  return (
    <>
      <Navbar />
      <div className="main bg-dark">
        <Header userName="Tony Jarvis!" />
  
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          amountDescription="Current Balance"
        />
      </div>

      <Footer />
    </>
  );
}
