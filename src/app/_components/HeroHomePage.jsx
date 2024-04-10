'use client'
import React from "react";
import styles from "../css/homepage.module.css"
import RoundedWidget from "../_components/RoundedWidget"
import Image from "next/image";
import heroscreeshot from "../images/heroscreeshot.png";
import arrowDown from "../images/arrow-down.svg";
import imageCover from "../images/imageCover.png";
import arrowUp from "../images/arrow-up.png";
import { motion } from "framer-motion";

const HeroHomePage = () => {
  return (
    <motion.div  >
      <section className={styles.hero}>
        <RoundedWidget  text={"Fast & Efficient with AI"} star={true} />

        <motion.div  className={styles.heroHeadingContainer}>
          <motion.h1 initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.5,ease:"easeOut", delay:0.5}}  className="centralizedHeading">
            Help customer and employees instantly with a personalized
            <span className={styles.firstLine}>&nbsp;AI-driven chatbot</span>
          </motion.h1>
          <motion.p initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.5,ease:"easeOut", delay:0.5}} className="centralizedText">
            Your customers and employees deserve more than just a basic chatbot.
            Elevate their experience with comprehensive customer service
            automation, human resource inquiry automation, and an AI-powered
            e-learning guide that efficiently resolves inquiries while
            delivering an unparalleled user experience. Don&apos;t settle for
            mediocrity; choose innovation and excellence and invest in the
            future for your business.
          </motion.p>
        </motion.div>
        <motion.div initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.5,ease:"easeOut", delay:0.5}} >
          <button className="buttonYellow buttonMargin">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </motion.div>
        <div  className={styles.heroImageContainer}>
          <motion.div initial={{opacity:0 , scale:0.5 }} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:1 , delay:0.3,ease:'easeOut'}} className={styles.heroscreeshotContainer}>
            <Image
              src={heroscreeshot}
              width={869}
              height={621}
              alt="Dashboard Screenshot"
              className={styles.heroImage}
            />
            <div className={`gradientCover ${styles.gradientCoverHero}`}></div>
          </motion.div>

          <motion.div initial={{opacity:0 , scale:0.5 }} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:1 , delay:0.5,ease:'easeOut'}} className={styles.heroImageCoverContainer}>
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
