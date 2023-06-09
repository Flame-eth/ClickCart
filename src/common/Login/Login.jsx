import React, { useEffect, useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

import { auth, provider } from "../../googleAuth/config.js";
import { signInWithPopup } from "firebase/auth";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions.js";

const Login = ({ user, setCurrentUser }) => {
  // console.log(user);
  const navigate = useHistory();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      setCurrentUser(result.user);
      // localStorage.setItem("user", JSON.stringify(result.user));
      navigate.push("/");
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <div className="sign-in-container">
      {/* <h2>Sign In with Google</h2> */}
      <button
        className="google-sign-in-button"
        onClick={handleClick}
        style={{ margin: "50px" }}>
        <span className="google-icon"></span>
        Sign In with Google
      </button>
      <button
        className="google-sign-in-button"
        onClick={handleLogout}
        style={{ margin: "50px" }}>
        <span className="google-icon"></span>
        Sign Out
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
