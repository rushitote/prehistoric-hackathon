import styles from "./Heading.module.css";

const Heading = ({theme, value}) => {
  const theme_name =
    theme === "light"
      ? "heading-light"
      : "heading-dark";
  // eslint-disable-next-line
  return <marquee className={`${styles['heading']} ${styles[theme_name]}`}>{value}</marquee>;
};

export default Heading;
