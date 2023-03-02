import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./ProductImg.css";
// import "slick-carousel/slick/slick-theme.css";

function ProductImg({ img1, img2 }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      <img src={img1} />
      <img src={img2} />
    </Slider>
  );
}

export default ProductImg;
