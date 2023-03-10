import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo_container}>
      <Link to={"/"}>
        <img className={classes.logo} src="https://picsum.photos/200" alt="" />
      </Link>
    </div>
  );
}

export default Logo;
