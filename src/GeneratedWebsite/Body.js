import styles from "./Body.module.css";
const Body = ({ theme, value }) => {
  const theme_name = theme === "light" ? "body-light" : "body-dark";
  return (
    <div className={`${styles["body"]} ${styles[theme_name]}`}>{value}</div>
  );
};

export default Body;
