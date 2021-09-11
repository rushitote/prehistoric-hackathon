import styles from "./Image.module.css";

const Image = (props) => {
  // eslint-disable-next-line
  return <img className={styles["image"]} src={props.value} />;
};

export default Image;
