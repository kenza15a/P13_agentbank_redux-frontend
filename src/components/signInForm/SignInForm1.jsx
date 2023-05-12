import React from "react";
import "./signInForm.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authMiddleware from "../../store/middlewares/authMiddlware";
import {
  setValidationErrors,
  setIsSubmitting,
  setSubmitError,
} from "../../store/authentification";
export default function SignInForm() {
  const userName = useSelector((state) => state.auth.formValues.user);
  const password = useSelector((state) => state.auth.formValues.password);
  const validationErrors = useSelector((state) => state.auth.validationErrors);
  const isSubmitting = useSelector((state) => state.auth.isSubmitting);
  const submitError = useSelector((state) => state.auth.submitError);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userNameField = document.getElementById("username");
  const passField = document.getElementById("password");
  const regMail =
    /(([(_)a-zA-Z0-9\.\-]{1,})(@)([a-zA-Z0-9\-]+)(\.)([a-zA-Z]{2,3})((\.)([a-z]{2,3}))?)/;

  /* const handleNameChange = (e) => {
    //userNameField.addEventListener("input", valideUserName);
    dispatch(setUserName(e.target.value)); //we must dispatch the service login
    // setUser({ ...user, email: e.target.value });
  };
  const handPasswordChange = (e) => {
    // passField.addEventListener("input", validatePassword);
    dispatch(setPassword(e.target.value));
    // setUser({ ...user, password: e.target.value });
  };
*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsSubmitting(true));
    dispatch(setSubmitError(null));
    //validation
    const errors = {};

    if (!userName || !regMail.test(userName)) {
      errors.user = "user name format is not correct ";
      if (userNameField) {
        userNameField.style.border = "solid red";
      }
    }

    if (!password) {
      errors.password = "password is required";
      if (passField) {
        passField.style.border = "solid red";
      }
    }
    if (Object.keys(errors).length > 0) {
      //if we have any errors we go back to the sign in page
      dispatch(setValidationErrors(errors));
      dispatch(setIsSubmitting(false));
      navigate("/sign-in");
      return;
    }
    try {
      // Save the form data to localStorage here

      dispatch(authMiddleware({ userName, password }));

      navigate("/user-page");
    } catch (error) {
      dispatch(setSubmitError(error.message));
    } finally {
      dispatch(setIsSubmitting(false));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          {validationErrors.user && <span>{validationErrors.user}</span>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          {validationErrors.password && (
            <span>{validationErrors.password}</span>
          )}
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button
          className="sign-in-button"
          type="submit"
          disabled={isSubmitting}
        >
          Sign In
        </button>
        {submitError && <span>{submitError}</span>}
      </form>
    </>
  );
}
