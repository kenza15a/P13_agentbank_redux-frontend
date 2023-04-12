import React from "react";
import "../../Styles/main.css";
import Button from "../Button/Button";
function Header({ userName }) {
  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userName}
        </h1>
        <Button buttonText="Edit name" />
      </div>
    </>
  );
}

export default Header;
