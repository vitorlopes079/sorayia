"use client";
import React from "react";
import styles from "../css/homepage.module.css";
import RoundedWidget from "../_components/RoundedWidget";
import Image from "next/image";
import heroscreeshot from "../images/heroscreeshot.png";
import arrowDown from "../images/arrow-down.svg";
import imageCover from "../images/imageCover.png";
import arrowUp from "../images/arrowUp.svg";
import { motion } from "framer-motion";

const HeroHomePage = () => {
  return (
    <motion.div>
      <section className={styles.hero}>
        <RoundedWidget text={"Fast & Efficient with AI"} star={true} />

        <motion.div>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="centralizedHeading"
          >
            Make Your Interactions Unforgettable with AI-Powered Personalized
            Chatbots
            <span className={styles.firstLine}>&nbsp;AI-driven chatbot</span>
          </motion.h1>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="centralizedText"
          >
            Your Customers And Employees Deserve More Than Just A Basic Chatbot.
            Elevate Their Experience With Comprehensive Customer Service
            Automation, Human Resource Inquiry Automation, And An AI-Powered
            E-Learning Guide That Efficiently Resolves Inquiries While
            Delivering An Unparalleled User Experience. Choose Innovation And
            Excellence And Invest In The Future For Your Business.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="buttonsContainer"
        >
            <button className="buttonBorderGradient">
              Get Started
              <Image src={arrowUp} width={32} height={32} alt="arrow up" />
            </button>

            <button className="buttonGrey buttonMargin" >
              Learn More
              <Image src={arrowDown} width={32} height={32} alt="arrow down" />
            </button>
  
        </motion.div>
        <div className={styles.heroImageContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className={styles.heroscreeshotContainer}
          >
            <Image
              src={heroscreeshot}
              width={869}
              height={621}
              alt="Dashboard Screenshot"
              className={styles.heroImage}
            />
            <div className={`gradientCover ${styles.gradientCoverHero}`}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className={styles.heroImageCoverContainer}
          >
            <Image
              src={imageCover}
              width={273}
              height={345}
              alt="Ai-chat screenchot"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HeroHomePage;
