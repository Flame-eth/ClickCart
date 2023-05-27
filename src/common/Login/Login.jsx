import React, { useEffect, useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

import { auth, provider } from "../../googleAuth/config.js";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const [user, setUser] = useState(null);

  const navigate = useHistory();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate.push("/");
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, [user]);


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

export default Login;
