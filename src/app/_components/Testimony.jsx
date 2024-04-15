import React from "react";
import Image from "next/image";
import star from "../images/star.png";
import quotes from "../images/quotes.svg";
import styles from "../css/testimonies.module.css";
import { motion } from "framer-motion";

const Testimony = ({ photo, name, text, containerStyle = styles.testimonyContainer }) => (
  <motion.div initial={{opacity:0 , scale:0.5 }} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.7 , delay:0,ease:'easeOut'}} className={containerStyle}>
    <div className={styles.testimonyTop}>
      <motion.div initial={{opacity:0 , scale:0.5 }} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:1 , delay:0.7,ease:'easeOut'}}>
      <Image src={photo} height={56} width={56} alt="Profile photo" />
      </motion.div>
      <motion.div initial={{opacity:0 , scale:0.5 }} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:1 , delay:0.7,ease:'easeOut'}} className={styles.starsAndName}>
        <p className={styles.nameText}>{name}</p>
        <div>
          {[...Array(5)].map((_, index) => (
            <Image key={index} src={star} height={20} width={20} alt="Star rating" />
          ))}
        </div>
      </motion.div>
      <motion.div initial={{opacity:0 , scale:0.5 }} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:1 , delay:0.7,ease:'easeOut'}} >
      <Image src={quotes} height={32} width={32} alt="Quotation marks" />
      </motion.div>
    </div>
    <motion.p initial={{x: -50 ,opacity:0 }} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1 , delay:0.7,ease:'easeOut'}} className={styles.testimonyText}>{text}</motion.p>
  </motion.div>
);

export default Testimony;