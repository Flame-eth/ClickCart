import React, { useEffect, useState } from "react";
import "./Login.css";

import { auth, provider } from "../../googleAuth/config.js";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const [user, setUser] = useState(null);
  const handleClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
    });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, [user]);

  console.log(user);
  return (
    <div className="sign-in-container">
      {/* <h2>Sign In with Google</h2> */}
      <button className="google-sign-in-button" onClick={handleClick}>
        <span className="google-icon"></span>
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
