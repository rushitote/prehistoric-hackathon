import styles from "./Heading.module.css";

const Heading = (props) => {
  return <marquee className={styles["heading"]}>{props.value}</marquee>;
};

export default Heading;
