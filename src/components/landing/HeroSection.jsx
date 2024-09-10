import "../../styles/home.scss";
import PrimaryButton from "../common/button/PrimaryButton";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-box">
        <p>New Arrival</p>
        <h1>Discover Our New Collection</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <div>
          <PrimaryButton
            title="BUY NOW!"
            handleClick={() => {
              console.log("object");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
