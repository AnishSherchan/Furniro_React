import "../styles/layout/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="furniro-info-footer">
          <h3>Funiro.</h3>
          <span>
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </span>
        </div>
        <div className="furniro-links-footer">
          <span>Links</span>
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="furniro-help-footer">
          <span>Help</span>
          <p>Payment Options</p>
          <p>Returns</p>
          <p>Privacy Policies</p>
        </div>
        <div className="furniro-newsletter-footer">
          <span>Newsletter</span>
          <div className="fields">
            <input
              type="text"
              name="news-letter"
              id="news-letter-input"
              placeholder="Enter Your Email Address"
            />
            <button className="sub btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
