import React from "react";
import "../../Styles/main.css";
export default function SignInForm() {
  return (
    <>
      <form>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>

        <a href="/user-page" className="sign-in-button">
          Sign In
        </a>
      </form>
    </>
  );
}
