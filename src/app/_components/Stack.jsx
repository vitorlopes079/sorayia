import React from "react";
import Image from "next/image";
import styles from "../css/stack.module.css"
import wix from "../images/wix.png";
import square from "../images/square.png";
import w from "../images/w.png";
import shopify from "../images/shopify.png";
import wp from "../images/wp.png";
import { motion } from "framer-motion";

const Stack = () => {
  return (
    <motion.div initial={{y: -50 ,opacity:0 }} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:1 , delay:0.5, ease:'easeOut'}} className={styles.container}>
      <div className="roundedContainer">
        <p>Widget Integration</p>
      </div>
      <div className={styles.stackContainer}>
        <h4 className={styles.stackSubHeader}>
          Simplify your work connect sorayia to your tech stack
        </h4>
        <div className={styles.testimonialIconsContainer}>
          <div
            className={`${styles.testimonialIconContainer} ${styles.firstTestimonialIconContainer}`}
          >
            <Image src={wix} width={60} height={60} alt="wix icon" />
          </div>
          <div className={styles.testimonialIconContainer}>
            <Image src={wp} width={60} height={60} alt="wordpress" />
          </div>
          <div className={styles.testimonialIconContainer}>
            <Image src={shopify} width={60} height={60} alt="shopify" />
          </div>
          <div
            className={`${styles.testimonialIconContainer} ${styles.wTestimonialIconContainer}`}
          >
            <Image src={w} width={60} height={46} alt="w" />
          </div>
          <div className={styles.testimonialIconContainer}>
            <Image src={square} width={60} height={60} alt="square space" />
          </div>
        </div>
        <p className={styles.stackSubText}>More than 120+ tools integreted</p>
      </div>
    </motion.div>
  );
};

export default Stack;
