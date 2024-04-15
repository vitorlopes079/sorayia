"use client";
import React from "react";
import styles from "../../css/resources.module.css";
import Image from "next/image";
import resourcesBanner from "../../images/resourcersBanner.png";
import arrowUpBlack from "../../images/arrowUpBlack.svg";
import Elipse from "../../_components/Elipse";
import RoundedWidget from "../../_components/RoundedWidget";
import { motion } from "framer-motion";
import star from "../../images/starbg.png";
import VerticalSwitch from "../../_components/VerticalSwitch";
import openAi from "../../images/openai-logo.png";
import graph from "../../images/graph.png";

const page = () => {
  return (
    <div className="container containerPaddingCustom">
      <Elipse
        background={"#0C1569"}
        top={"1020px"}
        right={"-190px"}
        height={"510px"}
        width={"495px"}
      />
      <section className={styles.hero}>
        <div className={styles.heroHeadingContainer}>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className={styles.heroHeading}
          >
            Sorayia.<span className="lowercase">com</span> Redefining Customer
            Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="centralizedText"
          >
            In a world where technology shapes every aspect of our daily lives,
            Sorayia.<span className="lowercase">com</span> emerges as a pioneer
            of innovation in customer experience. Partnering with leading
            artificial intelligence (AI) experts such as OpenAI and Ready Player
            Me, Sorayia.<span className="lowercase">com</span> offers a
            revolutionary solution that transforms how businesses interact with
            their customers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className={styles.bannerImageContainer}
          >
            <Image
              src={resourcesBanner}
              alt="Descriptive Alt Text"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 10%",
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="centralizedText"
          >
            In a world where technology shapes every aspect of our daily lives,
            Sorayia.<span className="lowercase">com</span> emerges as a pioneer
            of innovation in customer experience. Partnering with leading
            artificial intelligence (AI) experts such as OpenAI and Ready Player
            Me, Sorayia.<span className="lowercase">com</span> offers a
            revolutionary solution that transforms how businesses interact with
            their customers.
          </motion.p>
        </div>
      </section>

      <section className={styles.aiAdvantages}>
        <div className={styles.advatage}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className={styles.guideSectionText}
          >
            <RoundedWidget text={"AI Powered"} />

            <h1 className="leftHeading">Unparalleled Customer Experience</h1>
            <p className="leftText">
              Through our groundbreaking platform, businesses can now
              communicate with their customers in a more human and engaging
              manner than ever before. Our 3D avatar chatbots, powered by Open
              AI&apos;s AI intelligence, understand and respond to customer
              inquiries with exceptional accuracy and speed.
            </p>
            <div className={styles.starsContainer1}>
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={styles.linesContainer}
        >
          <div className={styles.verticalContainer1}>
            <VerticalSwitch variant="second" />
          </div>

          <div className={styles.verticalContainer2}>
            <VerticalSwitch variant="second" />
          </div>
        </motion.div>

        <div className={styles.advatage}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className={styles.guideSectionText}
          >
            <div className={styles.starsContainer2}>
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
            </div>
            <RoundedWidget text={"Your AI Assist"} />

            <h1 className="leftHeading">Personalization and Creativity</h1>
            <p className="leftText">
              At Sorayia.com, we believe in the power of individual expression.
              That&aposs why we&aposve integrated Ready Player Me&aposs 3D avatar creation
              technology into our platform, allowing our clients to customize
              their avatars according to their preferences and unique style.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={styles.openiaimageContainer}
        >
          <Image src={openAi} width={1101} height={314} />
        </motion.div>

        <RoundedWidget text={"Powered by AI"} id={"powered-by-ai"} />
        <div className={styles.flexDiv}>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="centralizedSubHeading"
          >
            Actionable Data for Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="centralizedText"
          >
            In addition to delivering an exceptional customer experience,
            Sorayia.<span className="lowercase">com</span> also provides
            valuable data to businesses to help them better understand their
            customers and make informed decisions. With our ability to collect
            and analyze data on customer interaction with our 3D avatar
            chatbots, we provide actionable insights that can be used to enhance
            products, optimize marketing strategies, and drive business growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className={styles.imagesContainer}
          >
            <Image src={graph} width={500} height={500} />
            <div className={styles.starsContainer3}>
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
              <Image src={star} width={53} height={53} />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="centralizedText"
          >
            Sorayia.<span className="lowercase">com</span> stands at the
            forefront of innovation in customer experience, offering a
            comprehensive solution that combines cutting-edge technology,
            personalization, and strategic data. Join us today and discover how
            Sorayia.<span className="lowercase">com</span> can transform your
            customer interaction for the better, while propelling your business
            to new heights of success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className={styles.buttonContainer}
          >
            <button className="buttonGradient">
              Discover Sorayia.<span className="lowercase">com</span>
              <Image
                src={arrowUpBlack}
                width={32}
                height={32}
                alt="Descriptive Alt Text"
              />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
