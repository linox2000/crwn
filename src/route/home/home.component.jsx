import { useContext } from "react";
import { CategoryContext } from "../../context/category.context";
import { Outlet } from "react-router-dom";
import "./home.styles.scss";


const Home = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <div>
      <Outlet />
      <div className="categories-container ">
        {categories.map(({ title, imageUrl, id, large }) => (
          <div key={id} className={`category-container ${large}`}>
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />
            <div className="category-body-container ">
              <h2>{title}</h2>
              <p>Comprar Agora</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
