import React from "react";
import "./header.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Header() {
  //const userName = useSelector((state) => state.auth.user);
 
 // const dispatch = useDispatch();
  
  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
      USER
        </h1>
        <Button  buttonText="Edit name" />
      </div>
    </>
  );
}

export default Header;
