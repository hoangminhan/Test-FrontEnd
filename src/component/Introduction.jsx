import React from "react";
import PropTypes from "prop-types";

Introduction.propTypes = {};

function Introduction(props) {
  const { introduction } = props;
  return (
    <div className="introduction">
      <div className="introduction__content">
        <img src={introduction} alt="" />
        <div className="introduction__content__body">
          <h2 className="introduction__content__body__title">What happen</h2>
          <p className="introduction__content__body__des">
            How to create mobile-optimezed videos in minutes. Not a design,
            every team makes a lot of videos Can be trimmed
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
