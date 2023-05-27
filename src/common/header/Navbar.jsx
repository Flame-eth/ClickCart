import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../../googleAuth/config.js";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);

  const [user, setUser] = useState(null);

  const navigate = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    });
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logout Successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, []);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span class="fa-solid fa-border-all"></span>
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

export default Navbar;
