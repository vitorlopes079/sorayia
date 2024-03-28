import React from "react";
import Image from "next/image";
import star from "../images/star.png";
import quotes from "../images/quotes.svg";
import styles from "../css/homepage.module.css";

const Testimony = ({ photo, name, text }) => (
  <div className={styles.testimonyContainer}>
    <div className={styles.testimonyTop}>
      <Image src={photo} height={56} width={56} alt="Profile photo" />
      <div className={styles.starsAndName}>
        <p className={styles.nameText}>{name}</p>
        <div>
          {[...Array(5)].map((_, index) => (
            <Image key={index} src={star} height={20} width={20} alt="Star rating" />
          ))}
        </div>
      </div>
      <Image src={quotes} height={32} width={32} alt="Quotation marks" />
    </div>
    <p className={styles.testimonyText}>{text}</p>
  </div>
);

export default Testimony;