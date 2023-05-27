import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../../googleAuth/config.js";
import { signInWithPopup } from "firebase/auth";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);

  const [user, setUser] = useState(null);

  const navigate = useHistory();
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
      window.location.reload();
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, [user]);
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
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/">pages</Link>
              </li>
              <li>
                <Link to="/">user account</Link>
              </li>
              <li>
                <Link to="/">track my order</Link>
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
