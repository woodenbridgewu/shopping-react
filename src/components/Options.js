import React from "react";
import { Link } from "react-router-dom";
import "./Options.module.css";

function Options() {
  return (
    <ul>
      <li>
        <Link to={"/products"}>熱門商品</Link>
      </li>
      <li>
        <Link to={"/about"}>品牌介紹</Link>
      </li>
      <li>
        <Link to={"/notes"}>購物須知</Link>
      </li>
      <li>
        <Link to={"/contact"}> 聯絡我們</Link>
      </li>
    </ul>
  );
}

export default Options;
