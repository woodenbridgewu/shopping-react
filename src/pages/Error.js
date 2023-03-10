import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div>出現錯誤</div>
      <Link to={"/"}>
        <button>返回首頁</button>
      </Link>
    </>
  );
}

export default Error;
