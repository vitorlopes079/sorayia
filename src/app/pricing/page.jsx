import React from "react";
import styles from "../css/pricing.module.css";
import Image from "next/image";
import checked from "../images/checked.svg";
import checkedInverse from "../images/checkedInverse.svg";
import emailIcon from "../images/email.svg";
import locationIcon from "../images/location.svg";
import PricingForm from "../_components/PricingForm";
import Elipse from "../_components/Elipse";
const page = () => {
  return (
    <div className={styles.container}>
      <Elipse numberOfEllipses={3} />
      <section className={styles.hero}>
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
      </section>

      <section id="join-us">
        <div>
          <div className={styles.cardsContainer}>
            <div>
              <p className={styles.textOverCard}>Amplify customer engagement</p>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardHeading}>Premium</h3>
                  <h3 className={styles.cardHeading}>$</h3>
                  <p className={styles.cardSubHeading}>Per month</p>
                </div>
                <div>
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
                </div>
                <p className={styles.lineBreck}>_ _ _</p>
                <button className={`buttonYellow ${styles.buttonFullWidth}`}>
                  Buy Now
                </button>
              </div>
            </div>

            <div>
              <p
                className={`${styles.textOverCard} ${styles.textOverCardCenter}`}
              >
                Unlock the power with our affordable beta tester basic package
              </p>
              <div className={`${styles.card} ${styles.cardCenter}`}>
                <div className={styles.cardTop}>
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
                </div>
                <div>
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
                </div>
                <p className={styles.lineBreckGray}>_ _ _</p>
                <p className={styles.lineBreckGray}>_ _ _</p>
                <p className={styles.lineBreckGray}>_ _ _</p>

                <button className={`buttonYellow ${styles.buttonFullWidth}`}>
                  Buy Now
                </button>
              </div>
            </div>

            <div>
              <p className={styles.textOverCard}>
                unleash the full potential of sorayia
              </p>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardHeading}>Advance</h3>
                  <h3 className={styles.cardHeading}>$</h3>
                  <p className={styles.cardSubHeading}>Per month</p>
                </div>
                <div>
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
                </div>
                <p className={styles.lineBreck}>_ _ _</p>
                <button className={`buttonYellow ${styles.buttonFullWidth}`}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.formSection}>
        <div>
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
        </div>
        <PricingForm />
      </section>
    </div>
  );
};

export default page;
