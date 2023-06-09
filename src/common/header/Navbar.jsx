import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../../googleAuth/config.js";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions.js";

const Navbar = ({ user, setCurrentUser }) => {
  // Toogle Menu

  // console.log(user);
  const [MobileMenu, setMobileMenu] = useState(false);

  // const [user, setUser] = useState(null);

  const navigate = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result.user);
      setCurrentUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    setCurrentUser(null);
    toast.success("Logout Successful!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // setTimeout(() => {
    //   window.location.reload();
    // }, 4000);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setCurrentUser(JSON.parse(user));
  }, []);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex categories">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories
              {/* <i className='fa fa-chevron-down'></i> */}
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-mobile" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to="/">home</Link>
              </li>

              <li>
                <Link to="/">contact</Link>
              </li>
              {user ? (
                <li>
                  <Link to="/" onClick={handleLogout}>
                    logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="" onClick={handleLogin}>
                    login
                  </Link>
                </li>
              )}
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
