import { Link } from "react-router-dom";

import "../../styles/contact.scss";

import { Logo } from "../../assets";

const Hero = () => {
  return (
    <div className="contact_hero">
      <div className="backdrop-filter hero-title">
        <img src={Logo} alt="Logo" height={30} />
        <h2 className=" text--h2">Contact</h2>
        <p className="navigation">
          <Link className="link" to={"/"}>
            <span>Home</span>
          </Link>{" "}
          {">"} Contact
        </p>
      </div>
    </div>
  );
};

export default Hero;
