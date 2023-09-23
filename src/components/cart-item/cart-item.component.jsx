import "./cart-item.styles.scss";
import { useContext,useState } from "react";
import { CartContext } from "../../context/cart.context";


const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details ">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price},Akz
        </span>
      </div>
    </div>
  );
};

export default CartItem;
