import React from "react";
import PropTypes from "prop-types";
import logo from "../assests/image/logo.png";
import Menu from "./Menu";
import iconMenu from "../assests/image/icon-menu.png";

Header.propTypes = {};

function Header(props) {
  const toggleMenu = (e) => {
    const menuItem = document.querySelector(".header__content__nav__list");

    console.log(e);

    if (menuItem) {
      menuItem.classList.toggle("active");
    }
  };
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content__logo">
            <img src={logo} alt="" className="header__content__logo__image" />
          </div>
          <div className="header__content__nav">
            <Menu />
          </div>
          <div className="header__content__icon--mobile" onClick={toggleMenu}>
            <i class="bx bx-menu"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
