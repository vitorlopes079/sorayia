"use client";
import React from "react";
import styles from "../../css/product.module.css";
import Stack from "../../_components/Stack";
import Image from "next/image";
import checked from "../../images/checked.svg";
import arrowUp from "../../images/arrow-up.png";
import MoreArticlesCard from "../../_components/MoreArticlesCard";
import RoundedWidget from "../../_components/RoundedWidget";
import FrequentelyAsked from "../../_components/FrequentelyAsked";
import productScreenshot from "../../images/productScreenshot.png";
import productScreenshot2 from "../../images/productScreenshot2.png";
import productScreenshot3 from "../../images/productScreenshot3.png";
import productScreenshot4 from "../../images/productScreenshot4.png";
import digitalBloom from "../../images/digitalBloom.png";
import digitalBloom2 from "../../images/digitalBloom2.png";
import digitalBloom3 from "../../images/digitalBloom3.png";
import Elipse from "../../_components/Elipse";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div className="container">
      <Elipse
        background={"#694676"}
        top={"450px"}
        right={"-150px"}
        height={"406px"}
        width={"406px"}
      />
      <Elipse
        background={"#453158"}
        top={"2300px"}
        left={"-80px"}
        height={"403px"}
        width={"381px"}
      />
      <Elipse
        background={"#443057"}
        top={"3600px"}
        right={"-150px"}
        height={"389px"}
        width={"401px"}
      />
      <motion.div
        initial={{
          x: -1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className={styles.topContainer} id="integration">
          <Stack />
          <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Your Email Address" />
            <button className="buttonYellow">Get Started</button>
          </div>
        </div>

        <section className={styles.mainSection}>
          <div className={styles.guideSectionContent}>
            <div className={styles.guideSectionText}>
              <RoundedWidget text={"Benefits"} id="benefits" />
              <h1 className="leftHeading">
                Why choose Sorayia and not another
              </h1>
              <motion.p className="leftText">
                Discover the distinctive advantages of Sorayia.
                <span className="lowercase">com</span> compared to other similar
                solutions on the market, highlighting our unique features and
                exceptional customer service.
              </motion.p>

              <button className="buttonYellow">
                Learn more about us
                <Image src={arrowUp} width={32} height={32} alt="arrow up" />
              </button>
            </div>
            <div className={styles.guideImageContainer}>
              <Image
                src={productScreenshot}
                width={628}
                height={392}
                alt="login page screenshot"
              />
              <div className="gradientCover"></div>
            </div>
          </div>

          <div className={styles.guideSectionContent}>
            <div
              className={`${styles.guideImageContainer} ${styles.borderOposite}`}
            >
              <Image
                src={productScreenshot2}
                width={628}
                height={458}
                alt="descriptive image"
              />
              <div className="gradientCover gradientCoverLeft"></div>
            </div>
            <div className={styles.guideSectionText}>
              <RoundedWidget
                text={"Artificial inteligence"}
                id={"artificial-inteligence"}
              />
              <h1 className="leftHeading">Technologies used in this AI</h1>
              <p className="leftText">
                Dive into the details of Sorayia.
                <span className="lowercase">com</span> features by exploring the
                cutting-edge technologies used to deliver optimal user
                experience and exceptional results.
              </p>

              <button className="buttonYellow">
                Learn more about us
                <Image src={arrowUp} width={32} height={32} alt="arrow up" />
              </button>
            </div>
          </div>

          <div className={styles.guideSectionContent}>
            <div className={styles.guideSectionText}>
              <RoundedWidget text={"3D influencer"} id={"3d-influencer"} />

              <h1 className="leftHeading">3D influencer widget</h1>
              <p className="leftText">
                Explore the power of avatars and their ability to communicate
                with your customers, especially through our 3D influencer
                widget, enabling immersive and engaging interaction.
              </p>

              <button className="buttonYellow">
                Learn more about us
                <Image src={arrowUp} width={32} height={32} alt="arrow up" />
              </button>
            </div>
            <div className={styles.guideImageContainer}>
              <Image
                src={productScreenshot3}
                width={648}
                height={458}
                alt="descriptive image"
              />
              <div className="gradientCover"></div>
            </div>
          </div>

          <div className={styles.guideSectionContent} id={"section1"}>
            <div
              className={`${styles.guideImageContainer} ${styles.borderOposite}`}
            >
              <Image
                src={productScreenshot4}
                width={628}
                height={458}
                alt="Dashoboard screenshot"
              />
              <div className="gradientCover gradientCoverLeft"></div>
            </div>
            <div className={styles.guideSectionText}>
              <RoundedWidget text={"Personalities"} id={"personalities"} />

              <h1 className="leftHeading">Personalities</h1>
              <p className="leftText">
                Learn about the big three avatar personalities and their impact
                on their respective markets, highlighting their unique
                characteristics and specific actions
              </p>

              <p className={`leftText ${styles.flex}`}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="ckecked"
                />
                Customer service
              </p>
              <p className={`leftText ${styles.flex}`}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="ckecked"
                />
                Learning
              </p>
              <p className={`leftText ${styles.flex}`}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="ckecked"
                />
                Human resources
              </p>
              <button className="buttonYellow">
                Learn more about us
                <Image src={arrowUp} width={32} height={32} alt="arrow up" />
              </button>
            </div>
          </div>
        </section>

        <section className={styles.moreBlogsSection}>
          <RoundedWidget text={"Features"} id={"features"} />
          <h1 className="centralizedHeading">More About Us</h1>
          <div className={styles.articlesContainer}>
            <MoreArticlesCard
              title={"Dynamic Responses"}
              image={digitalBloom}
              text={
                "Explore our dynamic response features, including text-to-speech and voice recognition, enabling seamless, interactive interaction between your business and your customers."
              }
              centralized={true}
            />
            <MoreArticlesCard
              title={"Artificial intelligence"}
              image={digitalBloom2}
              text={
                "Dive into the world of artificial intelligence and discover how it powers Sorayia&apos;s advanced capabilities to meet the changing needs of your business."
              }
              centralized={true}
            />
            <MoreArticlesCard
              title={"Analytic"}
              image={digitalBloom3}
              text={
                "Explore our advanced analytical tools, offering graphs tailored to each major avatar personality, for a deep understanding of your data and valuable insights."
              }
              centralized={true}
            />
          </div>

          <RoundedWidget text={"Data Extraction"} />
          <h1 className="centralizedHeading">Data Extraction</h1>
          <div className={styles.articlesContainer}>
            <MoreArticlesCard
              title={"Customer service"}
              image={digitalBloom}
              text={
                "Learn how our customer service uses data mining to sort leads based on interest, providing valuable insights for your sales team."
              }
              centralized={true}
            />
            <MoreArticlesCard
              title={"Learning"}
              image={digitalBloom2}
              text={
                "Explore how our solution makes it easy to track student progress and rank performance, enabling effective education and training management."
              }
              centralized={true}
            />
            <MoreArticlesCard
              title={"Human Resources"}
              image={digitalBloom3}
              text={
                "Explore how our solution makes it easy to track student progress and rank performance, enabling effective education and training management."
              }
              centralized={true}
            />
          </div>
        </section>
        <FrequentelyAsked />
      </motion.div>
    </div>
  );
};

export default page;
