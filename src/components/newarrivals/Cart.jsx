import React from "react";
import Ndata from "./Ndata";

const Cart = () => {
  return (
    <>
      <div className="content grid product cartSm">
        {Ndata.map((val, index) => {
          return (
            <div className="box cartSm1" key={index}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
