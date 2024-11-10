
import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Styles.footerContainer}>
      <p className={Styles.footerPara}>
        Copyright &copy; Blog<span> Abd.</span>
      </p>
    </footer>
  );
};

export default Footer;
