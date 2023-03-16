import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./FirebaseConfig";
import classes from "./Navbar.module.css";

function Navbar({ user, setUser }) {
  function logoutHandler() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  }
  // console.log(user);
  return (
    <>
      <nav>
        <Link to={"/"} className={classes.logo}>
          Normal Design
        </Link>
        <div>
          <Link to={"/cart"}>
            <img src={require("../images/shopping-cart.png")} alt="" />
          </Link>
          <Link to={"/profileRoot"}>
            <img src={require("../images/profile-user.png")} alt="" />
          </Link>
          {user && (
            <button className={classes.logout_button} onClick={logoutHandler}>
              登出
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
