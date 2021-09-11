import React, {useEffect} from "react";

export default function WarpSpeed() {
  useEffect(() => {
    const x = new WarpSpeed("warp");
  });
  return (
    <canvas
      id="warp"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></canvas>
  );
}
