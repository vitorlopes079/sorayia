import React from "react";
import Image from "next/image";
import styles from "../css/post.module.css";
import { motion } from "framer-motion";

const MoreArticlesCard = ({
  title,
  image = "",
  text = "-Sorayia.com",
  centralized = false,
}) => {
  return (
    <div className={`${styles.card} ${centralized ? "" :  styles.centralizedCard}`}>
      {centralized ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={styles.digitalBloom}
        >
          <Image src={image} width={410} height={240} alt="digital bloom" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={styles.MoreArticlesCardImage}
        >
          <Image src={image} width={300} height={190} alt={title} />
        </motion.div>
      )}

      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className={`${styles.cardTitle} ${
          centralized ? `${styles.centralized} ${styles.cardTitleBigger}` : ""
        }`}
      >
        {title}
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className={`${styles.cardText} ${
          centralized ? styles.centralized : ""
        }`}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default MoreArticlesCard;
