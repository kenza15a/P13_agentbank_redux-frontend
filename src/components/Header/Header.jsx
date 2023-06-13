import React from "react";
import "./header.css";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import EditForm from "../EditForm/EditForm";
import { getProfileData } from "../../redux/slices/profileSlice";
function Header() {
  //const userName = useSelector((state) => state.auth.user);

  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  const { firstName, lastName, isLoading, isSucces, message } = useSelector(
    (state) => state.profileSlice
  );
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {
        //isSucces && (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + " " + lastName}
          </h1>
          <button className="edit-button" onClick={toggleVisibility}>
            Edit name
          </button>
          {/** <Button buttonText="Edit name" onClick={toggleVisibility}></Button>*/}
          {isVisible && <EditForm />}
        </div>
        // )
      }
    </>
  );
}

export default Header;
