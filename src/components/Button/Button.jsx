import React from "react";

import "./button.css";
import PropTypes from "prop-types";
function Button({ buttonText ,buttonType}) {
  let buttonClassName="";
  if (buttonType==="edit") {
    buttonClassName += ' edit-button';
  }else{
    buttonClassName += ' transaction-button';
  }
  return (
    <>
      <button className={buttonClassName}>{buttonText}</button>
    </>
  );
}
Button.prototype = {
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
};
export default Button;
