import Home from "./route/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import Authentication from "./route/authentication/authentication.component";

const Shop = () => <h1>I am the shop Page</h1>;

const App = () => {
  return (
      <Routes>
        <Route  path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
  );
};

export default App;
