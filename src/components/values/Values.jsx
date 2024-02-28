import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion";
import "./values.css";
import valueimage from "../../assets/value.png";

const Values = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={valueimage} alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="brownText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
        </div>
      </div>
    </section>
  );
};

export default Values;
