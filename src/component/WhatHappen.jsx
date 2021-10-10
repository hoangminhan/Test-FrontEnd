import React from "react";
import PropTypes from "prop-types";
import video from "../assests/image/video.png";
import h from "../assests/image/video-object-05.png";
import hOrange from "../assests/image/video-object-03.png";
import w from "../assests/image/video-object-07.png";
import heart from "../assests/image/video-object-06.png";
import drink from "../assests/image/video-object-04.png";
import star from "../assests/image/video-object-09.png";
import shape from "../assests/image/video-object-08.png";
import errorImg from "../assests/image/video-object-01.png";
import mouse from "../assests/image/video-object-02.png";

WhatHappen.propTypes = {};

function WhatHappen(props) {
  return (
    <div className="section-happen">
      <div className="section-happen__header">
        <h2 className="section-happen__header__title">What happen</h2>
        <p className="section-happen__header__des">
          How to create mobile-optimized videos in minutes. Not a designer,
          <br />
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
        <div className="section-happen__header__more">
          <p>See more</p>
        </div>
      </div>
      <div className="section-happen__h">
        <img src={h} alt="" />
      </div>
      <div className="section-happen__w">
        <img src={w} alt="" />
      </div>
      <div className="section-happen__heart">
        <img src={heart} alt="" />
      </div>
      <div className="section-happen__drink">
        <img src={drink} alt="" />
      </div>
      <div className="section-happen__star">
        <img src={star} alt="" />
      </div>
      <div className="section-happen__shape">
        <img src={shape} alt="" />
      </div>

      <div className="section-happen__body">
        <div className="section-happen__body__image">
          <img src={video} alt="" />
          <div className="section-happen__body__image__mouse">
            <img src={mouse} alt="" />
          </div>
          <div className="section-happen__body__image__error">
            <img src={errorImg} alt="" />
            <div className="section-happen__body__image__error__h">
              <img src={hOrange} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatHappen;
