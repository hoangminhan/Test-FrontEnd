import React from "react";

import PropTypes from "prop-types";
import brandWindow from "../assests/image/window.png";
import brandFlower from "../assests/image/object-04.png";
import brandBoard from "../assests/image/object-05.png";
import brandBook1 from "../assests/image/object-06.png";
import brandBook2 from "../assests/image/object-07.png";
import brandPaper1 from "../assests/image/object-01.png";
import brandName from "../assests/image/object-02.png";
import brandWeek from "../assests/image/object-03.png";

BrandStory.propTypes = {};

function BrandStory(props) {
  return (
    <div className="brand">
      <div className="brand__header">
        <h2 className="brand__header__title">Brand story</h2>
        <p className="brand__header__des">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
      </div>

      <div className="brand__body">
        <div className="brand__body__image">
          <img src={brandWindow} alt="" />
          <div className="brand__body__image__content">
            <h2 className="brand__body__image__content__title">
              What Happened’s Brand story
            </h2>
            <div className="brand__body__image__content__des">
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </div>
            <div className="brand__body__image__content__more">
              <p>SEE MORE</p>
            </div>
          </div>
        </div>
        <div className="brand__body__book">
          <img src={brandBook2} alt="" />
        </div>
        <div className="brand__body__paper">
          <img src={brandPaper1} alt="" />
        </div>
      </div>

      <div className="brand__flower">
        <img src={brandFlower} alt="" />
      </div>
      <div className="brand__board">
        <img src={brandBoard} alt="" />
      </div>
      <div className="brand__name">
        <img src={brandName} alt="" />
      </div>
      <div className="brand__week">
        <img src={brandWeek} alt="" />
      </div>
      <div className="brand__book--straight">
        <img src={brandBook1} alt="" />
      </div>
    </div>
  );
}

export default BrandStory;
