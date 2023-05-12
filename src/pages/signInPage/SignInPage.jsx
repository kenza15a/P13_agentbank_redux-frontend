import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SignInForm from "../../components/signInForm/SignInForm";
import "./signInPage.css";
import "../../Styles/main.css";
function SignInPage() {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignInPage;
