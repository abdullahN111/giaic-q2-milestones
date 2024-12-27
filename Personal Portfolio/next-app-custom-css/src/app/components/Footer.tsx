import Link from "next/link";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footerSection}>
      <div className={Styles.footerContainer}>
        <div className={Styles.footerMain}>
          <div className={Styles.footerLeft}>
            <Link href="/">© Portfolio Abd.</Link>
            <span>|</span>
            <Link href="/">Home</Link>
            <span>|</span>
            <Link href="/about">About</Link>
            <span>|</span>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={Styles.footerRight}>
            <Link
              href="mailto:myselfabdullah360@gmail.com"
              className={Styles.footerItem}
            >
              <i className="fa material-icons">email</i>
            </Link>
            <Link href="https://www.linkedin.com/in/m-abdullah-nadeem/" className={Styles.footerItem}>
              <i className="fa fa-linkedin-square"></i>
            </Link>
            <Link href="https://www.instagram.com/i_abdullahn/" className={Styles.footerItem}>
              <i className="fa fa-instagram"></i>
            </Link>
            <Link href="https://www.instagram.com/i_abdullahn/" className={Styles.footerItem}>
              <i className="fa fa-facebook-square"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
