import React from "react";
import styles from "../css/footer.module.css";
import Image from "next/image";
import inst from "../images/inst.png";
import faceb from "../images/facebook.png";
import x from "../images/x.png";
import link from "../images/linkdin.png";
import emailIcon from "../images/email-icon.png";
import locationIcon from "../images/location-icon.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <section className={styles.newsLetter}>
        <p className={styles.call}>Joing Newsletter</p>
        <p className={styles.callText}>
          Get all updates of our SaaS products new features and AI updates.
        </p>
        <form className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <label> Your Email Adress </label>
            <input className={styles.inputField} />
          </div>

          <button className={styles.button}>Subscribe</button>
        </form>
      </section>
      <div className={styles.horizontalLine}></div>
      <section className={styles.quickLinks}>
        <div className={styles.column}>
          <p className={styles.linkHeader}>Sorayia.com</p>
          <p className={styles.linktext}>
            Your customers and employees deserve more than just a basic chatbot.
          </p>
          <div className={styles.socialsContainer}>
            <div className={styles.socialSingleContainer}>
              <Image src={inst} width={17} height={17} />
            </div>
            <div className={styles.socialSingleContainer}>
              <Image src={faceb} width={9} height={17} />
            </div>
            <div className={styles.socialSingleContainer}>
              <Image src={link} width={17} height={17} />
            </div>
            <div className={styles.socialSingleContainer}>
              <Image src={x} width={17} height={17} />
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subLinkHeader}>Quick Links</h2>
          <ul className={styles.list}>
            <li className={styles.link}>Home</li>
            <li className={styles.link}>Products</li>
            <li className={styles.link}>Solutions</li>
            <li className={styles.link}>Pricing</li>
            <li className={styles.link}>Resources</li>
            <li className={styles.link}>Login</li>
            <li className={styles.link}>Sign up</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subLinkHeader}>Support</h2>
          <ul className={styles.list}>
            <li className={styles.link}>Terms & Conditions</li>
            <li className={styles.link}>Privacy Policy</li>
            <li className={styles.link}>Retrun Policy</li>
            <li className={styles.link}>Contact Us</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subLinkHeader}>Support</h2>
          <div className={styles.iconWrapper}>
            <Image src={emailIcon} className={styles.icon} />
            <p>Contact@Sorayia.com</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={locationIcon} className={styles.icon} />
            <p>US</p>
          </div>
        </div>
      </section>
      <section className={styles.copyright}>
        <p>2024 Sorayia. All Rights Reserved</p>
      </section>
    </div>
  );
};

export default Footer;
