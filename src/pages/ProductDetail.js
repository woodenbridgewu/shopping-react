import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const param = useParams();
  console.log(param);
  return (
    <>
      <h1>{param.productId}</h1>
    </>
  );
}

export default ProductDetail;
