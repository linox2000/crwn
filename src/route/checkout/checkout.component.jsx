import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart,cartTotal } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Producto</span>
        </div>
        <div className="header-block">
          <span>Descriçao</span>
        </div>
        <div className="header-block">
          <span>Quantidade</span>
        </div>
        <div className="header-block">
          <span>Preço</span>
        </div>
        <div className="header-block">
          <span>Remover</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total:{cartTotal} Akz</span>
    </div>
  );
};

export default Checkout;
