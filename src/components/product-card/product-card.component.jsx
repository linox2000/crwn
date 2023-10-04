import "./product-card.styles.scss";
import Button,{BUTTONS_TYPE_CLASSES} from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container ">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTONS_TYPE_CLASSES.inverted} onClick={addProductToCart}>
      Adicionar ao Carrinho
      </Button>
    </div>
  );
};
export default ProductCard;
