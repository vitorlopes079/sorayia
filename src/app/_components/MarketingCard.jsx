import React from "react";
import Image from "next/image";
import CheckedIcon from "../images/checked.svg";
import styles from "../css/marketingCard.module.css";

const MarketingCard = ({
  title,
  imageSrc,
  listItems,
  centralized = false,
  text = "",
  solutions = false
}) => {
  return (
    <div className={`${styles.marketingCard} ${solutions ? styles.blueShadow : ""}`}>
      <div
        className={`${styles.introMediaContainer} ${
          centralized ? styles.centralizedImage : ""
        } `}
      >
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            width={60}
            height={60}
            alt="Marketing Highlight"
          />
        </div>

        <h4
          className={`${styles.title} ${
            centralized ? styles.centralizedCardTitle : ""
          }`}
        >
          {title}
        </h4>
      </div>

      {centralized ? (
        <p className={styles.centralizedCardText}>{text}</p>
      ) : (
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <Image
                src={CheckedIcon}
                alt="Checked"
                width={18}
                height={18}
                className={styles.checkedIcon}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MarketingCard;
