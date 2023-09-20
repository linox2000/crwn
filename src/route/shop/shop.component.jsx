import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.style.scss";

const Shop = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="products-container">
      {product.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default Shop;
