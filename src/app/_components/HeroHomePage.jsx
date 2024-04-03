import React from "react";
import styles from "../css/homepage.module.css"
import RoundedWidget from "../_components/RoundedWidget"
import Image from "next/image";
import heroscreeshot from "../images/heroscreeshot.png";
import arrowDown from "../images/arrow-down.svg";
import imageCover from "../images/imageCover.png";
import arrowUp from "../images/arrow-up.png";

const HeroHomePage = () => {
  return (
    <div>
      <section className={styles.hero}>
        <RoundedWidget text={"Fast & Efficient with AI"} star={true} />

        <div className={styles.heroHeadingContainer}>
          <h1 className="centralizedHeading">
            Help customer and employees instantly with a personalized
            <span className={styles.firstLine}>&nbsp;AI-driven chatbot</span>
          </h1>
          <p className="centralizedText">
            Your customers and employees deserve more than just a basic chatbot.
            Elevate their experience with comprehensive customer service
            automation, human resource inquiry automation, and an AI-powered
            e-learning guide that efficiently resolves inquiries while
            delivering an unparalleled user experience. Don&apos;t settle for
            mediocrity; choose innovation and excellence and invest in the
            future for your business.
          </p>
        </div>
        <div>
          <button className="buttonYellow buttonMargin">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.heroscreeshotContainer}>
            <Image
              src={heroscreeshot}
              width={869}
              height={621}
              alt="Dashboard Screenshot"
              className={styles.heroImage}
            />
            <div className={`gradientCover ${styles.gradientCoverHero}`}></div>
          </div>

          <div className={styles.heroImageCoverContainer}>
            <Image
              src={imageCover}
              width={273}
              height={345}
              alt="Ai-chat screenchot"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroHomePage;
