import React from "react";
import PropTypes from "prop-types";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import banner from "../assests/image/main-banner.png";
import introduction from "../assests/image/introduction-bg.png";
import Introduction from "../component/Introduction";
import Product from "../component/Product";
import Products from "../component/Products";
import Issue from "../component/Issue";
import BrandStory from "../component/BrandStory";
import WhatHappen from "../component/WhatHappen";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <>
      <Header />
      <Banner banner={banner} />
      <Introduction introduction={introduction} />
      <Product />
      <Products />
      <BrandStory />
      <Issue />
      <WhatHappen />

      <Footer />
    </>
  );
}

export default HomePage;
