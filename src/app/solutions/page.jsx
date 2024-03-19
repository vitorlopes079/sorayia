import React from "react";
import styles from "../css/solutions.module.css";
import Elipse from "../_components/Elipse";
import Image from "next/image";
import product from "../images/product.png";
import solutionsChat from "../images/solutions-chat.png";
import onlineStore from "../images/online-store.png";
import solutionsMarketing from "../images/solutions-marketing.png";
import talk from "../images/talk.png";
import preset from "../images/present.png";
import checked from "../images/checked.svg";

/* this page will hava all the alts set */

const page = () => {
  return (
    <div className={styles.container}>
      <Elipse numberOfEllipses={4} />
      <section className={styles.hero}>
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            Power up your marketing strategy with Sorayia.com
          </h1>
          <p className="centralizedText">
            Revolutionize your marketing game with Sorayia.com! Elevate your
            brand's presence, engage your audience, and dominate your market
            with our cutting-edge solutions. Unleash the power of Sorayia.com to
            propel your business to new heights of success.
          </p>
        </div>

        <div className={styles.guideCardsContainer}>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={solutionsMarketing}
                width={60}
                height={60}
                alt="Icon of a computer monitor with code and bug graphics."
              />
              <h4 className={styles.guideSectionCardTitle}>
                Chatbot for Marketing and Growth
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Optimize your marketing strategy with conversational AI
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Use the chatbot for lead generation.
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Generate more qualified leads through conversations and
                automatically qualify your prospects.
              </li>
            </ul>
          </div>

          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={onlineStore}
                width={60}
                height={60}
                alt="Icon of an online store"
              />
              <h4 className={styles.guideSectionCardTitle}>
                E-commerce Customer Service Chatbot
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Turn Traffic into Growing Revenue
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Build better relationships with real-time communication and get
                more satisfied customers
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Support Visitors at Every Stage of their Decision-Making Process
                and Dispel their Doubts in an Instant
              </li>
            </ul>
          </div>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={preset}
                width={60}
                height={60}
                alt="Icon of a person talking on a laptop"
              />
              <h4 className={styles.guideSectionCardTitle}>
                Increase Conversion Rates with AI Chatbots
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Boost your conversion rates
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Sell more products using chatbots and effortlessly increase your
                revenue
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Open new customer acquisition channels
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Automate and enhance your marketing with AI chatbots
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.guideCardsContainer}>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={solutionsChat}
                width={60}
                height={60}
                alt="Icon of a computer monitor with code and bug graphics."
              />
              <h4 className={styles.guideSectionCardTitle}>
                Chatbot Conversation Widget for your Website
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Engage more visitors on your website
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Add a conversation widget to your website in just a few clicks
                and automate communication with potential customers.
              </li>
            </ul>
          </div>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image src={talk} width={60} height={60} alt="assistance icon" />
              <h4 className={styles.guideSectionCardTitle}>
                Chatbots for Better Customer Experience
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Improve Customer Experience
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Offer personalized recommendations and tailored customer support
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Engage more customers with the chatbot
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Proactively engage visitors. Turn prospects into satisfied
                customers
              </li>
            </ul>
          </div>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={product}
                width={60}
                height={60}
                alt="perfomance icon"
              />
              <h4 className={styles.guideSectionCardTitle}>
                Showcase your Products
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Display your Products in the Right Way
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Promote Special Discounts
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Use personalized greetings and rich messages to inform users
                about seasonal discounts and promotional campaigns
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Create support tickets
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.underCardsText}>
          <p className="centralizedText">
            Start using Chat-Bot to grow your business. Chat-Bot templates
            included. No programming skills required.
          </p>
          <p className="centralizedText"> 
            Boost your customer experience with personalized communication.
            Automate user segmentation and create personalized user lists.
            Tailor your communication to different types of customers and foster
            natural conversations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
