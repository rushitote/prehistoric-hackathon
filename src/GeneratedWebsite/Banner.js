import styles from "./Banner.module.css";
const Banner = ({ theme }) => {
  const theme_name =
    theme === "light"
      ? "banner-text-light"
      : "banner-text-dark";
  return (
    <div className={styles["banner"]}>
      <h2 className={`${styles['banner-text']} ${styles[theme_name]}`}>We present to you - THE PAST</h2>
      <img
        src="https://www.heavensgate.com/img/hbhgtd.jpg"
        className={styles["banner-image"]}
        alt=""
      />
    </div>
  );
};
export default Banner;
