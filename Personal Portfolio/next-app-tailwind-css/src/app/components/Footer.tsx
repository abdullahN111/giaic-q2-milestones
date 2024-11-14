import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="text-white bg-darkmain py-[15px] flex items-center bottom-0 w-full fixed">
      <div className={Styles.footerContainer}>
        <div className={Styles.footerMain}>
          <div className={Styles.footerLeft}>
            <a href="">© Portfolio Abd.</a>
            <span>|</span>
            <a href="">Home</a>
            <span>|</span>
            <a href="">About</a>
            <span>|</span>
            <a href="">Contact</a>
          </div>
          <div className={Styles.footerRight}>
            <a
              href="mailto:myselfabdullah360@gmail.com"
              className={Styles.footerItem}
            >
              <i className="fa material-icons">email</i>
            </a>
            <a href="https://www.linkedin.com/in/m-abdullah-nadeem/" className={Styles.footerItem}>
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/i_abdullahn/" className={Styles.footerItem}>
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.instagram.com/i_abdullahn/" className={Styles.footerItem}>
              <i className="fa fa-facebook-square"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
