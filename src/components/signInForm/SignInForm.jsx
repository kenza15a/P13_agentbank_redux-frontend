import React, { useState, useEffect } from "react";
import "./signInForm.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset, setErrors } from "../../redux/slices/authSlice";

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const form = useSelector((state) => state.form);
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    //server answer 400 OR 404
    if (isError) {
      alert(message);
    }
    //200 SERVER ANSWER
    if (isSuccess || user) {
      navigate("/user-page");
    }
    if(!user){
       //RESET each time
    dispatch(reset()); //--> to review  
    }
   
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const userNameField = document.getElementById("username");
  const passField = document.getElementById("password");
  const regMail =
    /(([(_)a-zA-Z0-9\.\-]{1,})(@)([a-zA-Z0-9\-]+)(\.)([a-zA-Z]{2,3})((\.)([a-z]{2,3}))?)/;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const validateForm = (formData) => {
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

    //treat the form validation here

    const userData = {
      email,
      password,
    };
    //validation

    if (Object.keys(errors).length > 0) {
      dispatch(setErrors(errors));
      console.log(errors);
      navigate("/sign-in");
    } else {
      try {
        dispatch(login(userData));
      } catch (error) {
        alert(message);
      }
    }

    // navigate("/user-page");
  };
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
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </>
  );
}
