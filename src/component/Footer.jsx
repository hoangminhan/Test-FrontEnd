import React from "react";
import PropTypes from "prop-types";
import img1 from "../assests/image/snsicon-01.png";
import img2 from "../assests/image/snsicon-02.png";
import img3 from "../assests/image/snsicon-03.png";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__content__left">
            <h2 className="footer__content__left__title">What happened</h2>
            <p className="footer__content__left__item">
              [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어
              영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10
              이하 버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
            </p>
          </div>
          <div className="footer__content__right">
            <div className="footer__content__right__item">
              <h2 className="footer__content__right__item__title">About Us</h2>
              <div className="footer__content__right__item__content">
                회사 소개 인재 <br /> 채용 상시 <br /> 할인 혜택
              </div>
            </div>
            <div className="footer__content__right__item">
              <h2 className="footer__content__right__item__title">My Order</h2>
              <div className="footer__content__right__item__content">
                내 주문 <br /> 주문 배송 취소 <br />/ 교환 / 반품 내역
                <br /> 상품 리뷰 내역 증빙 서류 발급
              </div>
            </div>
            <div className="footer__content__right__item">
              <h2 className="footer__content__right__item__title">
                My Account
              </h2>
              <div className="footer__content__right__item__content">
                회원 정보 수정 <br /> 회원 등급 <br /> 마일리지 현황 쿠폰
              </div>
            </div>
            <div className="footer__content__right__item">
              <h2 className="footer__content__right__item__title">Help</h2>
              <div className="footer__content__right__item__content">
                1 : 1 상담 내역 <br />
                상품 Q & A 내역 공지 사항
                <br /> 자주하는 질문 <br />
                고객의 소리
              </div>
            </div>
          </div>
        </div>

        <div className="footer__copyRight">
          <p className="footer__copyRight__left">
            © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
            사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
            이용약관 l 개인정보처리방침
          </p>
          <div className="footer__copyRight__right">
            <div className="footer__copyRight__right__item">
              <img src={img1} alt="" />
            </div>
            <div className="footer__copyRight__right__item">
              <img src={img2} alt="" />
            </div>
            <div className="footer__copyRight__right__item">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
