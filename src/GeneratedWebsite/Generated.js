import { useEffect, useState } from "react";
import Body from "./Body";
import Heading from "./Heading";
import Image from "./Image";
import styles from "./Generated.module.css";
import Banner from "./Banner";
import About from "./About";
import Footer from "./Footer";
import backgrounds from "../sprites/bgs.json";
import StarfieldAnimation from "react-starfield-animation";

const Generated = () => {
  const input = JSON.parse(window.localStorage.getItem("formElements"));
  let randomVal = Math.floor(Math.random() * backgrounds.bgs.length);
  let bgImg = backgrounds.bgs[randomVal].link;
  let bgTheme = backgrounds.bgs[randomVal].theme;

  const [toShowStarfield, setToShowStarfield] = useState(true);

  function updateTime() {
    setToShowStarfield(false);
  }

  useEffect(() => {
    const token = setTimeout(updateTime, 5000);
    return function cleanUp() {
      clearTimeout(token);
    };
  });

  return toShowStarfield ? (
    <div
      style={{
        background: `url(https://i.imgur.com/4FCxWaB.jpeg)`,
        backgroundSize: "stretch",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "3em",
          fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        Taking you back to the 1990s...
      </h1>
      <StarfieldAnimation
        numParticles={800}
        depth={500}
        alphaFactor={3.0}
        style={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  ) : (
    <div
      className={styles["element-root"]}
      style={{ backgroundImage: `url(` + bgImg + `)` }}
    >
      <h1 className={styles["alert"]}>Welcome!</h1>
      <Banner theme={bgTheme} />
      <About theme={bgTheme} />
      {input.map((element) => {
        if (element.type === "heading")
          return (
            <Heading
              value={element.value}
              key={Math.random()}
              theme={bgTheme}
            />
          );
        else if (element.type === "body")
          return (
            <Body value={element.value} key={Math.random()} theme={bgTheme} />
          );
        else return <Image value={element.value} key={Math.random()} />;
      })}
      <Footer theme={bgTheme} />
    </div>
  );
};

export default Generated;
