import styles from "./Heading.module.css";

const Heading = ({ theme, value }) => {
  const theme_name = theme === "light" ? "heading-light" : "heading-dark";

  return (
    // eslint-disable-next-line
    <marquee className={`${styles["heading"]} ${styles[theme_name]}`}>
      {value}
    </marquee>
  );
};

export default Heading;
