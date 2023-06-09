import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2 footer">
          <div className="fLogoCon">
            <div className="logo width ">
              <Link to="/">
                <h1 className="logo" style={{ color: "white" }}>
                  Click Cart
                </h1>
              </Link>
              {/* <img src={logo} alt='' /> */}
            </div>
            <p>
              Your one-stop-shop for all your shopping needs. We are here to
              provide you with the best quality products at the best prices.
            </p>
            <div className="icon fIcons">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="boxCon">
            <div className="box">
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="box">
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </div>
            <div className="box">
              <h2>Contact Us</h2>
              <ul>
                <li>
                  70 Washington Square South, New York, NY 10012, United States{" "}
                </li>
                <li>Email: support@click-cart.com</li>
                <li>Phone: +11111 2222 3333 </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
