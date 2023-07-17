import React from "react";
import { useState } from "react";
import "./editForm.css";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfileData,
  updateprofile,
  setEditVisible,
} from "../../redux/slices/profileSlice";
import { useEffect } from "react";
function EditForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);
  const { firstName, lastName, isEditVisible } = useSelector(
    (state) => state.profileSlice
  );

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
  });

  const handleSubmit = (event) => {
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
    };
    console.log(userData);
    event.preventDefault();
    dispatch(updateprofile(userData));
  };
  const onChange = (e) => {
    console.log(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const hideForm = () => {
    dispatch(setEditVisible());
  };

  return (
    <>
      {isEditVisible && (
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="user-infos">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder={firstName}
              defaultValue={firstName}
              onChange={onChange}
            />

            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder={lastName}
              defaultValue={lastName}
              onChange={onChange}
            />
          </div>
          <div className="buttons">
            <button type="submit">Save</button>
            <button onClick={hideForm}>Cancel</button>
          </div>
        </form>
      )}
    </>
  );
}

export default EditForm;
