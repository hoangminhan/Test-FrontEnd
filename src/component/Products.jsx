import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import dataProducts from "../assests/data/dataProduct";
import heart from "../assests/image/hearticon.png";
import Grid from "./Grid";

Products.propTypes = {};

function Products(props) {
  const checkShow = useRef();
  const [showData, setShowData] = useState(15);
  const handleShowMore = () => {
    if (showData < 20) {
      setShowData(20);
      checkShow.current.innerText = "Hidden Less";
    }
    if (showData === 20) {
      setShowData(15);
      checkShow.current.innerText = "Show More";
    }
  };
  console.log(dataProducts);
  return (
    <div className="products">
      <div className="container">
        <Grid col={5} mdCol={3} smCol={1} gap={10}>
          {dataProducts &&
            dataProducts.map((item, index) => {
              if (index < showData) {
                return (
                  <div className="products__item" key={index}>
                    <div className="products__item__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="products__item__title">
                      <p>{item.title}</p>
                    </div>
                    <div className="products__item__content">
                      <p className="products__item__content__price">
                        {item.price} won
                      </p>
                      <p className="products__item__content__rate">
                        <img src={heart} alt="" />
                        {item.rate}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
        </Grid>

        <div className="products__more" onClick={handleShowMore}>
          <p ref={checkShow}>See More</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
