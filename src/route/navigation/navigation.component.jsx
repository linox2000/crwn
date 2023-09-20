import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import { CartDropdownContext } from "../../context/cart-dropdown.context";
import { signOutUser } from "../../firebase/utilits";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdpwn from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartDropdownContext);

 
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SAIR
            </span>
          ) : (
            <Link to="/auth">ENTRAR</Link>
          )}
          <CartIcon />
        </div>
        {
          isCartOpen && <CartDropdpwn />
        }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
