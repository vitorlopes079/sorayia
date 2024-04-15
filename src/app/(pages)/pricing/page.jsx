"use client";
import React from "react";
import styles from "../../css/pricing.module.css";
import Image from "next/image";
import checked from "../../images/checked.svg";
import checkedInverse from "../../images/checkedInverse.svg";
import emailIcon from "../../images/email.svg";
import locationIcon from "../../images/location.svg";
import PricingForm from "../../_components/PricingForm";
import Elipse from "../../_components/Elipse";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="container">
      <Elipse
        background={"linear-gradient(180deg, #F7CE46 0%, #985180 100%)"}
        top={"390px"}
        right={"-80px"}
        height={"354px"}
        width={"309px"}
      />
      <Elipse
        background={
          "linear-gradient(180deg, rgba(255, 224, 0, 0.29) 0%, rgba(153, 0, 147, 0.29) 100%)"
        }
        top={"980px"}
        left={"-120px"}
        height={"383px"}
        width={"407px"}
      />
      <Elipse
        background={
          "linear-gradient(180deg, rgba(247, 206, 70, 0.47) 0%, #914E29 100%)"
        }
        top={"2100px"}
        right={"-120px"}
        height={"356px"}
        width={"320px"}
      />
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className={styles.hero}
      >
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            Join the evolutionary wave of digital realm interaction!
          </h1>
          <p className="centralizedText">
            We offer a range of packages tailored to your needs, providing you
            with a personalized experience with Sorayia
          </p>
        </div>
        <div>
          <button className="buttonYellow">Get Started free demo</button>
        </div>
      </motion.section>

      <section id="join-us">
        <div>
          <div className={styles.cardsContainer}>
            <div>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className={styles.textOverCard}
              >
                Amplify customer engagement
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
                className={styles.card}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  className={styles.cardTop}
                >
                  <h3 className={styles.cardHeading}>Premium</h3>
                  <h3 className={styles.cardHeading}>$</h3>
                  <p className={styles.cardSubHeading}>Per month</p>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      10,000 Credits
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      GPT 3.5 16K
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      GPT 4
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      15 User
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      10,000 Documents
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      10,000 Website pages
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      Website crawler
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      Embed website widget ( 3 Websites )
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      API
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      Remove Sorayia Branding on widget
                    </li>
                  </ul>
                </motion.div>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  className={styles.lineBreck}
                >
                  _ _ _
                </motion.p>
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  className={`buttonYellow ${styles.buttonFullWidth}`}
                >
                  Buy Now
                </motion.button>
              </motion.div>
            </div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className={`${styles.textOverCard} ${styles.textOverCardCenter}`}
              >
                Unlock the power with our affordable beta tester basic package
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
                className={`${styles.card} ${styles.cardCenter}`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  className={styles.cardTop}
                >
                  <h3 className={`${styles.cardHeading} ${styles.centerColor}`}>
                    Basic
                  </h3>
                  <h3 className={`${styles.cardHeading} ${styles.centerColor}`}>
                    $99
                  </h3>
                  <p
                    className={`${styles.cardSubHeading} ${styles.centerColor}`}
                  >
                    Per month
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  <ul className={styles.list}>
                    <li className={`${styles.listItem} ${styles.centerColor}`}>
                      <Image
                        src={checkedInverse}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      1000 credit
                    </li>
                    <li className={`${styles.listItem} ${styles.centerColor}`}>
                      <Image
                        src={checkedInverse}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      GPT 3.5 16K
                    </li>
                    <li className={`${styles.listItem} ${styles.centerColor}`}>
                      <Image
                        src={checkedInverse}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      1 User
                    </li>
                    <li className={`${styles.listItem} ${styles.centerColor}`}>
                      <Image
                        src={checkedInverse}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      50 PDF Documents
                    </li>
                    <li className={`${styles.listItem} ${styles.centerColor}`}>
                      <Image
                        src={checkedInverse}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      Embed website widget
                    </li>
                    <li className={`${styles.listItem} ${styles.centerColor}`}>
                      <Image
                        src={checkedInverse}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      customized website widget
                    </li>
                    <li className={`${styles.listItem} ${styles.centerColor}`}>
                      <Image
                        src={checkedInverse}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      3D Avatar customizing
                    </li>
                    <li className={`${styles.listItem} ${styles.centerColor}`}>
                      <Image
                        src={checkedInverse}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      Basic Dashboard Acces
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  <p className={styles.lineBreckGray}>_ _ _</p>
                  <p className={styles.lineBreckGray}>_ _ _</p>
                  <p className={styles.lineBreckGray}>_ _ _</p>

                  <Link href={"/checkout"}>
                    <button
                      className={`buttonYellow ${styles.buttonFullWidth}`}
                    >
                      Buy Now
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className={styles.textOverCard}
              >
                unleash the full potential of sorayia
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
                className={styles.card}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  className={styles.cardTop}
                >
                  <h3 className={styles.cardHeading}>Advance</h3>
                  <h3 className={styles.cardHeading}>$</h3>
                  <p className={styles.cardSubHeading}>Per month</p>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      25,000 Credits
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      GPT 3.5 16K
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      GPT 4
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      50 User
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      25,000 Documents
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      25,000 Website pages
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      Website crawler
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      Embed website widget ( 50 Websites )
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      API
                    </li>
                    <li className={styles.listItem}>
                      <Image
                        src={checked}
                        width={15}
                        height={15}
                        className={styles.checkedIcon}
                        alt="Descriptive Alt Text"
                      />
                      Remove Sorayia Branding on widget
                    </li>
                  </ul>
                </motion.div>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  className={styles.lineBreck}
                >
                  _ _ _
                </motion.p>
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  className={`buttonYellow ${styles.buttonFullWidth}`}
                >
                  Buy Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.formSection}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="centralizedHeading">Contact us for custom Pricing</h1>
          <p className="centralizedText">
            Do you have question about our pricing plan or need a custom quote
            tailored to your specific needs? Fill out the form below, and our
            team will reach out you promptly to discuss the options that best
            suit you.
          </p>
          <div className={styles.formIconsContainer}>
            <div className={styles.formIconContainer}>
              <Image
                src={emailIcon}
                width={24}
                height={24}
                className={styles.icon}
                alt="Descriptive Alt Text"
              />
              <p>Contact@Sorayia.com</p>
            </div>
            <div className={styles.formIconContainer}>
              <Image
                src={locationIcon}
                width={24}
                height={24}
                className={styles.icon}
                alt="Descriptive Alt Text"
              />
              <p>California, US</p>
            </div>
          </div>
        </motion.div>
        <PricingForm />
      </section>
    </div>
  );
};

export default page;
