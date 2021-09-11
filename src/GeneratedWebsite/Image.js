import styles from "./Image.module.css";

const Image = (props) => {
  return <img className={styles["image"]} src={props.value} />;
};

export default Image;
