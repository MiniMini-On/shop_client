import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <img src="https://cdn-prd-image.oround.com/api/imgs/banner/20230120/g3nNf0-20230120095536482.png" />
        <img src="https://cdn-prd-image.oround.com/api/imgs/banner/20230213/mG5fjo-20230213174933297.png" />
        <img src="https://cdn-prd-image.oround.com/api/imgs/banner/20230126/I5XWC9-20230126175558245.png" />
        <img src="https://cdn-prd-image.oround.com/api/imgs/banner/20221208/mubcKO-20221208112853516.png" />
        <img src="https://cdn-prd-image.oround.com/api/imgs/banner/20230113/yv21xB-20230113143158846.jpg" />
        <img src="https://cdn-prd-image.oround.com/api/imgs/banner/20230214/OkYYYX-20230214141408791.png" />
      </Slider>
    </div>
  );
}

export default Home;
