import { useEffect, useState } from "react";
import Body from "./Body";
import Heading from "./Heading";
import Image from "./Image";
import styles from "./Generated.module.css";
import Banner from "./Banner";
import About from "./About";
import Footer from "./Footer";
import backgrounds from "../sprites/bgs.json";
import WarpSpeed from "../modules/warpspeed";

const Generated = () => {
  let x = 0; 
  useEffect(() => {
    x = new WarpSpeed("warp");
  });

  const [seconds, setSeconds] = useState(3);
  useEffect(() => {
    console.log(seconds)
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      x.destroy()
      setSeconds(0);
    }
  },);

  const input = JSON.parse(window.localStorage.getItem("formElements"));
  let randomVal = Math.floor(Math.random() * backgrounds.bgs.length);
  let bgImg = backgrounds.bgs[randomVal].link;
  let bgTheme = backgrounds.bgs[randomVal].theme;    
  
  if(seconds===0){
    return   ( <div
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
    )}
    else{
      return (<canvas id="warp" style={{position:"fixed", top:0, left:0, width:"100%", height:"100%"}}></canvas>)
    }
  }
  // return { !isCanvas  ? (
  //   <div
  //     className={styles["element-root"]}
  //     style={{ backgroundImage: `url(` + bgImg + `)` }}
  //   >
  //     <h1 className={styles["alert"]}>Welcome!</h1>
  //     <Banner theme={bgTheme} />
  //     <About theme={bgTheme} />
  //     {input.map((element) => {
  //       if (element.type === "heading")
  //         return (
  //           <Heading
  //             value={element.value}
  //             key={Math.random()}
  //             theme={bgTheme}
  //           />
  //         );
  //       else if (element.type === "body")
  //         return (
  //           <Body value={element.value} key={Math.random()} theme={bgTheme} />
  //         );
  //       else return <Image value={element.value} key={Math.random()} />;
  //     })}
  //     <Footer theme={bgTheme} />
  //   </div>
  // ) : (
  //   <canvas
  //     id="warp"
  //     style={{
  //       position: "fixed",
  //       top: 0,
  //       left: 0,
  //       width: "100%",
  //       height: "100%",
  //     }}
  //   ></canvas>
  // )}
  // <canvas id="warp" style={{position:"fixed", top:0, left:0, width:"100%", height:"100%"}}></canvas>
  // <div
  //   className={styles["element-root"]}
  //   style={{ backgroundImage: `url(` + bgImg + `)` }}
  // >
  //   <h1 className={styles["alert"]}>Welcome!</h1>
  //   <Banner theme={bgTheme} />
  //   <About theme={bgTheme} />
  //   {input.map((element) => {
  //     if (element.type === "heading")
  //       return (
  //         <Heading
  //           value={element.value}
  //           key={Math.random()}
  //           theme={bgTheme}
  //         />
  //       );
  //     else if (element.type === "body")
  //       return (
  //         <Body value={element.value} key={Math.random()} theme={bgTheme} />
  //       );
  //     else return <Image value={element.value} key={Math.random()} />;
  //   })}
  //   <Footer theme={bgTheme} />
  // </div>
// };

export default Generated;
