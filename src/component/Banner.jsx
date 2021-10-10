import React from "react";
import PropTypes from "prop-types";

Banner.propTypes = {};

function Banner(props) {
  const { banner, titleHeader } = props;

  return (
    <div className="banner" id="introduction">
      <img src={banner} alt="" className="banner__logo" />
    </div>
  );
}

export default Banner;
