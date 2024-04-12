import React from "react";
import styles from "../css/elipse.module.css";

const Elipse = ({ background, left, right, top, height, width }) => {
  const dynamicStyle = {
    background: background || "rgba(217, 217, 217, 0.32)", 
    left,
    right,
    top,
    transform: left || right ? "translateY(-50%)" : undefined,
    height: height ? height : "300px",
    width: width ? width : "300px",
  };

  return (
    <div className={styles.Elipse} style={dynamicStyle}></div>
  );
};


export default Elipse;