import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";

const TopCart = () => {
  const userWidth = window.innerWidth;
  // console.log(userWidth);

  let noOfSlides = 2;

  if (userWidth >= 1200) {
    noOfSlides = 2;
  } else if (userWidth >= 992) {
    noOfSlides = 2;
  } else if (userWidth >= 650) {
    noOfSlides = 1;
  } else if (userWidth >= 500) {
    noOfSlides = 1;
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
        {Tdata.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="nametop d_flex">
                  <span className="tleft">{value.para}</span>
                  <span className="tright">{value.desc}</span>
                </div>
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
