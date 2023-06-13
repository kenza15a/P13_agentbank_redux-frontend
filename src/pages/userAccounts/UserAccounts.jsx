import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Account from "../../components/Account/Account";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
export default function UserAccounts() {
  const { isLoading } = useSelector((state) => state.profileSlice);
  return (
    <>
      <Navbar />
      {isLoading && <Loading />}

      <div className="main bg-dark">
        <Header />

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
