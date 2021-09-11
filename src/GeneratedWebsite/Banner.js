import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles["banner"]}>
      <h2 className={styles["banner-text"]}>We present to you - THE PAST</h2>
      <img
        src="https://www.heavensgate.com/img/hbhgtd.jpg"
        className={styles["banner-image"]}
      />
    </div>
  );
};
export default Banner;
