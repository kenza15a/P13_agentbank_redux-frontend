import React from "react";
import "../../Styles/main.css";
import Button from "../Button/Button";
import PropTypes from "prop-types";
function Account({ title, amount, amountDescription }) {
  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{amountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button
            className="transaction-button"
            buttonText="View transactions"
          />
        </div>
      </section>
    </>
  );
}
Account.prototypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  amountDescription: PropTypes.string.isRequired,
};

export default Account;
