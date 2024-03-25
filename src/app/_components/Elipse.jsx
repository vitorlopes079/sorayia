import React from "react";
import styles from "../css/elipse.module.css";

const Elipse = ({ numberOfEllipses }) => {
  const ellipses = Array.from({ length: numberOfEllipses }, (_, index) => (
    <div key={index} className={`${styles.Elipse} ${styles[`Elipse${index + 1}`]}`}></div>
  ));

  return (
    <div className={styles.elipseContainer}>
      {ellipses}
    </div>
  );
};

export default Elipse;