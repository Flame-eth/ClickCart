import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex headCon">
          <div className="left headLeft">
            <div className="">
              <i className="fa fa-phone"></i>
              <label> +11111 2222 3333</label>
            </div>
            <div className="">
              <i className="fa fa-envelope"></i>
              <label> support@clickcart.com</label>
            </div>
          </div>
          <div className="right row RText">
            <label>FAQ</label>
            <label>Need Help?</label>
            {/* <label>USD</label> */}
            <i className="fa fa-solid fa-dollar-sign fa-sm"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
