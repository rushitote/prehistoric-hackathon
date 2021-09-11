import styles from "./Image.module.css";

const Image = (props) => {
  return <img className={styles["image"]} src={props.value} alt="" />;
};

export default Image;
