import React, { useEffect, useState } from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link, useHistory } from "react-router-dom";
import userImg from "./user.png";

const Search = ({ CartItem }) => {
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    let totalItem = 0;
    for (let index = 0; index < CartItem.length; index++) {
      totalItem += CartItem[index].qty;
    }
    setTotalItem(totalItem);
  }, [CartItem]);

  const user = JSON.parse(localStorage.getItem("user"));

  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const history = useHistory();

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/">
              <h1 className="logo">Click Cart</h1>
            </Link>
            {/* <img src={logo} alt='' /> */}
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span className="searchSubmit">All Category</span>
          </div>

          <div className="icon f_flex width">
            {/* <i className="fa fa-user icon-circle"></i> */}

            {user ? (
              <div className="dropdown">
                <img
                  src={user.photoURL}
                  alt=""
                  className="icon-circle"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/login")}
                />
              </div>
            ) : (
              <div className="icon-circle" style={{ cursor: "pointer" }}>
                <i className="fa fa-user "></i>
              </div>
            )}

            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
