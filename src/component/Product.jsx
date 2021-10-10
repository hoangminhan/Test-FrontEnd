import React from "react";
import PropTypes from "prop-types";
import background from "../assests/image/bes-bg.png";
import item1 from "../assests/image/best-image-01.png";
import item2 from "../assests/image/best-image-02.png";
import item3 from "../assests/image/best-image-03.png";
import producticon01 from "../assests/image/producticon-01.png";
import producticon02 from "../assests/image/producticon-02.png";
import producticon03 from "../assests/image/producticon-03.png";
import goIcon from "../assests/image/go-icon.png";

Product.propTypes = {};

function Product(props) {
  return (
    <div className="product">
      <div className="product__content">
        <img src={background} alt="" className="product__content__img" />
        <div className="product__content__header">
          <h2 className="product__content__header__title">BEST PRODUCT</h2>
          <p className="product__content__header__des">
            How to creat mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of video Can be trimed. Take the first
          </p>
        </div>
        <div className="product__content__body">
          <div className="product__content__body__item">
            <div className="product__content__body__item__image">
              <img src={item1} alt="" />
              <p className="product__content__body__item__image__header">
                <img src={producticon01} alt="" />
              </p>
              <div className="product__content__body__item__image__bottom">
                <p>How to create mobile-optimized</p>
                <div className="product__content__body__item__image__bottom__image">
                  <img src={goIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product__content__body__item">
            <div className="product__content__body__item__image">
              <img src={item2} alt="" />
              <p className="product__content__body__item__image__header">
                <img src={producticon02} alt="" />
              </p>
              <div className="product__content__body__item__image__bottom">
                <p>How to create mobile-optimized</p>
                <div className="product__content__body__item__image__bottom__image">
                  <img src={goIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product__content__body__item">
            <div className="product__content__body__item__image">
              <img src={item3} alt="" />
              <p className="product__content__body__item__image__header">
                <img src={producticon03} alt="" />
              </p>
              <div className="product__content__body__item__image__bottom">
                <p>How to create mobile-optimized</p>
                <div className="product__content__body__item__image__bottom__image">
                  <img src={goIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
