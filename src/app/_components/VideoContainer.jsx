import React from "react";
import styles from "../css/videoContainer.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "../images/avatar.png";

const VideoContainer = () => {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.speechBalloonsContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{}}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={`${styles.speechBalloon} ${styles.Iam}`}
        >
          <p>I&apos;m your virtual 3D avatar</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{}}
          transition={{ duration: 1, delay: 0, ease: "easeOut" }}
          className={styles.speechBalloon}
        >
          <p>Hi there!</p>
        </motion.div>
      </div>

      <motion.div className={styles.imageContainer}>
        <Image
          src={avatar}
          width={263}
          height={430}
          className={styles.avatarImage}
          alt="3D avatar"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className={styles.videoContainer}
      >
        <video
          src={require("../../../public/avatarvideo.mov")}
          autoPlay
          muted
          loop
          width={515}
          height={296}
          className={styles.video}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className={styles.gradientCover}
      ></motion.div>
    </div>
  );
};

export default VideoContainer;
