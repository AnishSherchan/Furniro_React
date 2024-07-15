/* eslint-disable no-unused-vars */
import PrimaryLogo from "../assets/Logo/Frame 168.png";
import AlertIcon from "../assets/icons/akar-icons_search.png";
import Favorites from "../assets/icons/akar-icons_heart.png";
import SearchIcon from "../assets/icons/akar-icons_search.png";
import CartIcon from "../assets/icons/ant-design_shopping-cart-outlined.png";

import "../styles/layout/header.scss";

const Header = () => {
  return (
    <header>
      {/* <!-- Add Logo for the website --> */}
      <img src={PrimaryLogo} alt="Logo" className="logo" />
      {/* <!-- Add Nav Links for the website --> */}
      <nav>
        <a href="/">Home</a>
        <a href="shop.html">Shop</a>
        <a href="#">About</a>
        <a href="/contact.html">Contact</a>
      </nav>
      {/* <!-- Add CTAs --> */}
      <div className="cta">
        <img src={AlertIcon} alt="Account Alert" />
        <img src={SearchIcon} alt="Search" />
        <img src={Favorites} alt="Favorites" />
        <img src={CartIcon} alt="Cart" />
      </div>
    </header>
  );
};

export default Header;
