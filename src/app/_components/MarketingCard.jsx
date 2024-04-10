import React from "react";
import Image from "next/image";
import CheckedIcon from "../images/checked.svg";
import styles from "../css/marketingCard.module.css";
import { motion } from "framer-motion";

const MarketingCard = ({
  title,
  imageSrc,
  listItems,
  centralized = false,
  text = "",
  shadow,
}) => {
  return (
    <motion.div initial={{opacity:0 , scale:0.5 }} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.7 , delay:0,ease:'easeOut'}} className={`${styles.marketingCard} ${shadow ? styles[shadow] : ""}`}>
      <div
        className={`${styles.introMediaContainer} ${
          centralized ? styles.centralizedImage : ""
        } `}
      >
        <motion.div initial={{opacity:0 , scale:0.5 }} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:1 , delay:0.7,ease:'easeOut'}} className={styles.imageContainer}>
          <Image
            src={imageSrc}
            width={60}
            height={60}
            alt="Marketing Highlight"
          />
        </motion.div>

        <motion.h4 initial={{x: -50 ,opacity:0 }} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1 , delay:0.7,ease:'easeOut'}}
          className={`${styles.title} ${
            centralized ? styles.centralizedCardTitle : ""
          }`}
        >
          {title}
        </motion.h4>
      </div>

      {centralized ? (
        <motion.p initial={{x: -50 ,opacity:0 }} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1 , delay:0.7, ease:'easeOut'}}  className={styles.centralizedCardText}>{text}</motion.p>
      ) : (
        <motion.ul initial={{x: -50 ,opacity:0 }} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1 , delay:0.7, ease:'easeOut'}} className={styles.list}>
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
        </motion.ul>
      )}
    </motion.div>
  );
};

export default MarketingCard;
