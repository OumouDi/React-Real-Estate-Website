import { React, useState } from "react";
import logo from "../../assets/logo.png";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { getMenuStyles } from "../../utils/common";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="logo" width={300} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="h-menu" style={getMenuStyles(menuOpened)}>
            <a href="residencies">Residencies</a>
            <a href="ourvalues">Our values</a>
            <a href="contactsus">Contact us</a>
            <a href="getstarted">Get started</a>
            <button className="button">
              <a href="contact">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
