import React from "react";

import PropTypes from "prop-types";
import "./feature.css";
function Feature({ icon, title, description }) {
  return (
    <>
      <div className="feature-item">
        <img src={icon} alt="" className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Feature;
