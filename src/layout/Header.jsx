/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";

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
            <NavLink to={nav.route} key={index}>
              {nav.label}
            </NavLink>
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
