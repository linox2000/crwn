import { Category, BackgroundImage, Body } from "./home.styles.jsx";

import { useNavigate } from "react-router-dom";

const Home = ({ category }) => {
  const { title, imageUrl, large, route } = category;
  
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <Category large={large} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Comprar Agora</p>
      </Body>
    </Category>
  );
};

export default Home;
