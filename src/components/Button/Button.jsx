import React from "react";

import "./button.css";
import PropTypes from "prop-types";
function Button({ buttonText }) {
  /**
   * ajouter un type if type edit else type transaction
   */
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
