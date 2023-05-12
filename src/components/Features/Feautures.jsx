import React from "react";
import "./features.css";
import Feature from "../Feature/Feature";
import chatIcon from "../../assets/img/icon-chat.png";
import moneyIcon from "../../assets/img/icon-money.png";
import securityIcon from "../../assets/img/icon-security.png";
function Feautures() {
  return (
    <>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          icon={chatIcon}
          title="You are our #1 priority"
          description="  Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          icon={moneyIcon}
          title="More savings means higher rates"
          description="   The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          icon={securityIcon}
          title="Security you can trust"
          description=" We use top of the line encryption to make sure your data and money
            is always safe."
        />
      </section>
    </>
  );
}

export default Feautures;
