import Body from "./Body";
import Heading from "./Heading";
import Image from "./Image";
import styles from "./Generated.module.css";
import Banner from "./Banner";
import About from "./About";
import Footer from "./Footer";

const Generated = () => {
  const input = [
    {
      type: "heading",
      value: "IIIT Pune",
    },
    {
      type: "body",
      value: "We all love your teachers but none more so than Keanu Reaves",
    },
    {
      type: "image",
      value: "https://i.imgur.com/AsxjJnh.jpeg",
    },
  ];

  return (
    <div className={styles["element-root"]}>
      <h1 className={styles["alert"]}>Welcome!</h1>
      <Banner />
      <About />
      {input.map((element) => {
        if (element.type === "heading")
          return <Heading value={element.value} key={Math.random()} />;
        else if (element.type === "body")
          return <Body value={element.value} key={Math.random()} />;
        else return <Image value={element.value} key={Math.random()} />;
      })}
      <Footer />
    </div>
  );
};

export default Generated;
