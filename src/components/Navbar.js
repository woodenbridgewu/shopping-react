import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar(props) {
  console.log(props.user);
  return (
    <>
      <nav>
        <Link to={"/"} className={classes.logo}>
          Normal Design
        </Link>
        <div>
          <Link to={"/cartRoot"}>
            <img src={require("../images/shopping-cart.png")} alt="" />
          </Link>
          <Link to={"/profileRoot"}>
            <img src={require("../images/profile-user.png")} alt="" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
