import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to create the optimal <br />
            living environment for everyone
          </span>
        </div>

        <div className="flexColStart f-right">
          <div className="flexCenter f-menu">
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            <span>Cookie Policy</span>
            <span>
              <p>&copy; 2024 Elite Estate. All Rights Reserved.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
