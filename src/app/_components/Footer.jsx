import React from "react";
import styles from "../css/footer.module.css";
import Image from "next/image";
import inst from "../images/inst.png";
import faceb from "../images/facebook.png";
import x from "../images/x.png";
import link from "../images/linkdin.png";
import emailIcon from "../images/email-icon.png";
import locationIcon from "../images/location-icon.png";
import Link from "next/link";

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

          <button className="buttonYellow buttonMargin">Subscribe</button>
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
              <Image src={inst} width={17} height={17} alt="instagram"/>
            </div>
            <div className={styles.socialSingleContainer}>
              <Image src={faceb} width={9} height={17} alt="facebook"/>
            </div>
            <div className={styles.socialSingleContainer}>
              <Image src={link} width={17} height={17} alt="linkedIn"/>
            </div>
            <div className={styles.socialSingleContainer}>
              <Image src={x} width={17} height={17} alt="x"/>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subLinkHeader}>Quick Links</h2>
          <div className={styles.list}>
            <Link className={styles.link} href={"./"}>Home</Link>
            <Link className={styles.link}  href={"./product"}>Products</Link>
            <Link className={styles.link} href={"/solutions"}> Solutions</Link>
            <Link className={styles.link} href={"/pricing"}>Pricing</Link>
            <Link className={styles.link} href={"/resources"}>Resources</Link>
            <p className={styles.link}>Login</p>
            <p className={styles.link}>Sign up</p>
          </div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subLinkHeader}>Support</h2>
          <div className={styles.list}>
            <p className={styles.link}>Terms & Conditions</p>
            <p className={styles.link}>Privacy Policy</p>
            <p className={styles.link}>Retrun Policy</p>
            <p className={styles.link}>Contact Us</p>
          </div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subLinkHeader}>Support</h2>
          <div className={styles.iconWrapper}>
            <Image src={emailIcon} className={styles.icon} alt="email icon"/>
            <p>Contact@Sorayia.com</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={locationIcon} className={styles.icon} alt="location icon"/>
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
