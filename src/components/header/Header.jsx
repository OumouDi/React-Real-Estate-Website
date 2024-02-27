import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="logo" width={300} />
        <div className="h-menu">
          <a href="residencies">Residencies</a>
          <a href="ourvalues">Our values</a>
          <a href="contactsus">Contact us</a>
          <a href="getstarted">Get started</a>
          <button className="button">
            <a href="contact">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
