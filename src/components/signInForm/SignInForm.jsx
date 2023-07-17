import React, { useState, useEffect } from "react";
import "./signInForm.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset, setErrors } from "../../redux/slices/authSlice";
import Loading from "../Loading/Loading";

export default function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remeberMe: false,
  });
  const [remeberMe, setRemeberMe] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const form = useSelector((state) => state.form);
  const { user, isLoadig, message, errors } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //server answer 400 OR 404
    if (message.length > 0) {
      setShowMessage(true)
    }
    //200 SERVER ANSWER
    if (user) {
      navigate("/profile");
    }
    dispatch(reset());
  }, [user, isLoadig, message, errors, navigate, dispatch]);

  //to display errors in form
  const { email, password } = formData;

  const userNameField = document.getElementById("username");
  const passField = document.getElementById("password");
  const regMail =
    /(([(_)a-zA-Z0-9\.\-]{1,})(@)([a-zA-Z0-9\-]+)(\.)([a-zA-Z]{2,3})((\.)([a-z]{2,3}))?)/;

  const onChange = (e) => {
    if (e.target.type === "checkbox") {
      //
      setRemeberMe(!remeberMe);
    }

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const validateForm = () => {
    let errors = {};
    if (userNameField) {
      if (!userNameField.value) {
        errors.email = "Email is required";
      } else if (!regMail.test(userNameField.value)) {
        errors.email = "Invalid email address";
      }
    }
    if (passField) {
      if (!passField.value) {
        errors.password = "Password is required";
      } else if (passField.value.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
    }
    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(form);

    //Treat the form validation here

    const userData = {
      email,
      password,
      remeberMe,
    };
    //validation

    if (Object.keys(errors).length > 0) {
      dispatch(setErrors(errors));
      //display the error
      console.log(errors);
      navigate("/login");
    } else {
      dispatch(login(userData));
    }
  };

  if (isLoadig) {
    return <Loading />;
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="email"
            value={email}
            onChange={onChange}
          />
          {validateForm(formData).email && (
            <span>{validateForm(formData).email}</span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          {validateForm(formData).password && (
            <span>{validateForm(formData).password}</span>
          )}
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" onChange={onChange} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
      <div>
    {showMessage && (
      <div className="error-message">
<p className="title">There have been an error!</p>
        <p>UserName or password Not correct </p>
      </div>
    )}
  </div>
    </>
  );
}
