import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left headLeft">
            <i className="fa fa-phone"></i>
            <label> +11111 2222 3333</label>
            <i className="fa fa-envelope"></i>
            <label> support@click-cart.com</label>
          </div>
          <div className="right row RText">
            <label>FAQ</label>
            <label>Need Help?</label>
            <label>EN</label>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
