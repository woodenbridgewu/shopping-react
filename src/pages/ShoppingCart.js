import React, { useState, useEffect } from "react";
import styles from "./ShoppingCart.module.css";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  return (
    <div className={styles["cart-container"]}>
      <table className={styles["cart-table"]}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td data-label="Title">{item.title}</td>
              <td data-label="Price">{item.price}</td>
              <td data-label="Quantity">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingCart;
