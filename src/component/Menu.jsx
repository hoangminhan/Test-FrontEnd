import React from "react";
import PropTypes from "prop-types";

Menu.propTypes = {};

function Menu(props) {
  return (
    <ul className="header__content__nav__list">
      <li className="header__content__nav__item">
        <a href="#introduction" className="header__content__nav__item__link">
          INTRODUCTION
        </a>
      </li>
      <li className="header__content__nav__item">
        <a href="#" className="header__content__nav__item__link">
          SOLUTION
        </a>
      </li>
      <li className="header__content__nav__item">
        <a href="#" className="header__content__nav__item__link">
          RATE PLANE
        </a>
      </li>
      <li className="header__content__nav__item">
        <a href="#" className="header__content__nav__item__link">
          LOGIN
        </a>
      </li>
      <li className="header__content__nav__item">
        <a href="#" className="header__content__nav__item__link">
          APPLY FOR FREE USE
        </a>
      </li>
    </ul>
  );
}

export default Menu;
