import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";

const Dcard = () => {
  const userWidth = window.innerWidth;
  // console.log(userWidth);

  let noOfSlides = 4;

  if (userWidth >= 1200) {
    noOfSlides = 4;
  } else if (userWidth >= 992) {
    noOfSlides = 3;
  } else if (userWidth >= 650) {
    noOfSlides = 2;
  } else if (userWidth >= 500) {
    noOfSlides = 2;
  } else if (userWidth >= 320) {
    noOfSlides = 1;
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <div className="box product" key={index}>
              <div className="img">
                <img src={value.cover} alt="" width="100%" />
              </div>
              <h4>{value.name}</h4>
              <span>{value.price}</span>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
