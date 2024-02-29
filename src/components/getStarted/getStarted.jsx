import React from "react";
import "./getStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Elite Estate</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button" href>
            <a href="mailto:mail@gmail.com">Get Started with Elite Estate</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
