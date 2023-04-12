import React from "react";
import "../../Styles/main.css";
import PropTypes from "prop-types";
function Button({ buttonText }) {
  return (
    <>
      <button className="edit-button">{buttonText}</button>
    </>
  );
}
Button.prototype = {
  buttonText: PropTypes.string.isRequired,
};
export default Button;
