import styles from "./Body.module.css";
const Body = (props) => {
  return <div className={styles["body"]}>{props.value}</div>;
};

export default Body;
