import { useContext } from "react";
import { CategoryContext } from "../../context/category.context";
import Home from "../../route/home/home.component";
import { DirectoryContainer } from "../../route/home/home.styles";


const Directory = () => {
  const { categories } = useContext(CategoryContext);
  

  return (
    <DirectoryContainer >
      {categories.map((category) => (
        <Home key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
export default Directory;
