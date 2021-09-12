import styles from "./Banner.module.css";
const Banner = ({ theme }) => {
  const theme_name =
    theme === "light" ? "banner-text-light" : "banner-text-dark";
  const images = [
    "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/02/ctXFWZl-1.gif",
    "https://i.pinimg.com/originals/18/93/c0/1893c0c89d144588b9be9844da573af1.gif",
    "http://24.media.tumblr.com/e5e81d2e65d72d761ee6cd5eaec74735/tumblr_mvr3y5KL931rnq3cto1_500.gif",
    "https://c.tenor.com/f2Dz0QKQlpoAAAAM/time-traveling-its-rucka.gif",
  ];
  const image = images[Math.floor(Math.random() * images.length)];
  return (
    <div className={styles["banner"]}>
      <h2 className={`${styles["banner-text"]} ${styles[theme_name]}`}>
        We present to you - THE PAST
      </h2>
      <img src={`${image}`} className={styles["banner-image"]} alt="" />
    </div>
  );
};
export default Banner;
