import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right" x></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

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
    speed: 500,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>${productItems.price}.00 </h4>

                    <button onClick={() => addToCart(productItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
