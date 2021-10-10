import React from "react";
import PropTypes from "prop-types";
import img01 from "../assests/image/news-img-01.png";
import img03 from "../assests/image/news-img-03.png";
import img04 from "../assests/image/news-img-04.png";
import img05 from "../assests/image/news-img-05.png";
import img06 from "../assests/image/news-object-03.png";
import img07 from "../assests/image/news-object-05.png";
import img08 from "../assests/image/news-object-03_2.png";
import img09 from "../assests/image/news-object-02.png";
import Grid from "./Grid";

Issue.propTypes = {};

function Issue(props) {
  return (
    <div className="happen-issue">
      <div className="happen-issue__header">
        <h2 className="happen-issue__header__title">Happened’s issue</h2>
        <div className="happen-issue__header__content">
          <p>
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 <br /> 다듬을 수 있습니다. 브랜드의 성공을
            위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
        </div>
        <div className="happen-issue__header__more">
          <p>see more</p>
        </div>
      </div>
      <div className="happen-issue__item--5">
        <img src={img08} alt="" />
      </div>
      <div className="happen-issue__item--3">
        <img src={img09} alt="" />
      </div>

      <div className="happen-issue__body">
        <div className="happen-issue__body__content">
          <Grid col={5} mdCol={3} smCol={1}>
            <div className="happen-issue__body__content__item">
              <div className="happen-issue__body__content__item__name">
                <h2>
                  whpn <br /> issue
                </h2>
              </div>
              <div className="happen-issue__body__content__item__image">
                <img src={img01} alt="" />
              </div>
              <div className="happen-issue__body__content__item__smile">
                <img src={img06} alt="" />
              </div>
            </div>
            <div className="happen-issue__body__content__item">
              <div className="happen-issue__body__content__item__name">
                <h2>B Brand</h2>
              </div>
              <div className="happen-issue__body__content__item__image">
                <img src={img03} alt="" />
              </div>
            </div>
            <div className="happen-issue__body__content__item">
              <div className="happen-issue__body__content__item__name">
                <h2>C Brand</h2>
              </div>
              <div className="happen-issue__body__content__item__image">
                <img src={img04} alt="" />
              </div>
            </div>
            <div className="happen-issue__body__content__item">
              <div className="happen-issue__body__content__item__name">
                <h2>D Brand</h2>
              </div>
              <div className="happen-issue__body__content__item__image">
                <img src={img05} alt="" />
              </div>
              <div className="happen-issue__body__content__item__smile">
                <img src={img07} alt="" />
              </div>
            </div>
            <div className="happen-issue__body__content__item">
              <div className="happen-issue__body__content__item__name">
                <h2>E Brand</h2>
              </div>
              <div className="happen-issue__body__content__item__image">
                <img src={img04} alt="" />
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Issue;
