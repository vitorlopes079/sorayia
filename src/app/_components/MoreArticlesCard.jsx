import React from "react";
import Image from "next/image";
import styles from "../css/post.module.css";

const MoreArticlesCard = ({
  title,
  image = "",
  text = "-Sorayia.com",
  centralized = false,
}) => {
  return (
    <div className={styles.card}>
      {centralized ? (
        <div className={styles.digitalBloom}>
          <Image src={image} width={410} height={240} alt="digital bloom"/>
        </div>
      ) : (
        <div>
          <Image src={image} width={300} height={190} alt={title}/>
        </div>
      )}

      <h4
        className={`${styles.cardTitle} ${
          centralized ? styles.centralized : ""
        }`}
      >
        {title}
      </h4>
      <p
        className={`${styles.cardText} ${
          centralized ? styles.centralized : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default MoreArticlesCard;
