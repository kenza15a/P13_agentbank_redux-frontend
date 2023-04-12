import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SignInForm from "../../components/signInForm/SignInForm";

function SignInPage() {
  return (
    <>
      <Navbar />
      <div className="main bg-dark">
        <div class="sign-in-content">
          <SignInForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignInPage;
