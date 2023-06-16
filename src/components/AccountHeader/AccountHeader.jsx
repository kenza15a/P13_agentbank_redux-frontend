import React from "react";
import "./AccountHeader.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import EditForm from "../EditForm/EditForm";
import { getProfileData,setEditVisible } from "../../redux/slices/profileSlice";
function AccountHeader() {
  //const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  const { firstName, lastName,isEditVisible } = useSelector((state) => state.profileSlice);
  const toggleVisibility = () => {
   // setIsVisible(!isVisible);
   dispatch(setEditVisible())
  };
  return (
    <>
      {
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + " " + lastName}
          </h1>
          <button className="edit-button" onClick={toggleVisibility}>
            Edit name
          </button>

          {isEditVisible && <EditForm />}
        </div>
      }
    </>
  );
}

export default AccountHeader;
