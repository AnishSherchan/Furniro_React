/* eslint-disable no-unused-vars */
import {
  PrimaryLogo,
  AlertIcon,
  Favorites,
  SearchIcon,
  CartIcon,
} from "../assets";
import { NAVIGATION } from "../utils/constands";

import "../styles/layout/header.scss";

const Header = () => {
  return (
    <header>
      {/* <!-- Add Logo for the website --> */}
      <img src={PrimaryLogo} alt="Logo" className="logo" />
      {/* <!-- Add Nav Links for the website --> */}
      <nav>
        {NAVIGATION.map((nav, index) => {
          return (
            <a href={nav.route} key={index}>
              {nav.label}
            </a>
          );
        })}
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
