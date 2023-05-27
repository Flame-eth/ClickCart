import React from "react";
import FlashCard from "./FlashCard";
import "./style.css";

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            {/* <i className="fa fa-bolt"></i> */}
            <i
              className="fa-solid fa-bolt"
              Spin
              // style={{ color: "#120078" }}
            ></i>

            <h1 style={{ color: "#120078" }}>Flash Delas</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
