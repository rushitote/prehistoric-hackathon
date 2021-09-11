import styles from "./Footer.module.css";

const Footer = ({theme}) => {
  const theme_name =
    theme === "light"
      ? "footer-light"
      : "footer-dark";
  return <div className={`${styles['footer']} ${styles[theme_name]}`}>No rights reserved, 1999</div>;
};

export default Footer;
