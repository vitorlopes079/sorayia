import React from "react";
import styles from "../css/checkout.module.css";
import Image from "next/image";
import logo from "../images/checkout/logo.png";
import CheckoutForm from "../_components/CheckoutForm";
import apple from "../images/checkout/AppleLogo.png";

export const metadata = {
  title: "Sorayia",
  icons: {
    icon: "images/sorayia-fav-icon.png",
  },
};

const page = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.column} ${styles.firstColumn}`}>
        <div className={styles.logoContainer}>
          <Image src={logo} width={283} height={64} alt="logo" />
        </div>
        <div>
          <div className={styles.flex}>
            <p className={styles.headingOne}>Suscribe to Sorayia:</p>
            <p className={styles.type}>Basic</p>
          </div>
          <div className={styles.flex}>
            <h4 className={styles.price}>99</h4>
            <p>
              <span className={styles.priceSpan}>$</span>{" "}
              <span className={styles.priceUs}>US</span>{" "}
              <span className={styles.priceMonth}>/month</span>
            </p>
          </div>
        </div>
        <div>
          <div className={styles.subContainer}>
            <div className={`${styles.flex} ${styles.between}`}>
              <p className={styles.headingTwo}>Sorayia Basic : </p>
              <p className={styles.headingOne}>99$</p>
            </div>
            <p className={styles.text}>
              Designed for small businesses and start-ups looking to implement
              AI automation solutions for scale, teach, and manage your business
              our Starter Plan offers essential AI tools and services to help
              you get started
            </p>
            <p className={styles.note}>Bill every month</p>
          </div>

          <div className={`${styles.flex} ${styles.between}`}>
            <p className={styles.headingTwo}>Subtotal</p>
            <p className={styles.headingOne}>99$</p>
          </div>
          <div className={styles.horizontalLine}></div>
          <div className={`${styles.flex} ${styles.between} ${styles.gray}`}>
            <p className={styles.headingTwo}>Taxe</p>
            <p className={styles.headingOne}>99$</p>
          </div>
          <div className={styles.horizontalLine}></div>

          <div className={`${styles.flex} ${styles.between}`}>
            <p className={styles.headingTwo}>Total</p>
            <p className={styles.headingOne}>99$</p>
          </div>
          <div className={styles.horizontalLine}></div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.appleIconContainer}>
          <Image src={apple} width={30} height={24} alt="apple icon" />
          <div>Pay</div>
        </div>
        <div className={styles.divisorContainer}>
          <div className={styles.smallHorizontalLine}></div>
          <p>or pay by credit card</p>
          <div className={styles.smallHorizontalLine}></div>
        </div>
        <CheckoutForm />
        <div className={styles.bottomText}>
          <p className={styles.textGap}>
            By confirming your subscription, you authorize Sorayia to charge
            your card for this payment and future payments in accordance with
            its terms.
          </p>
          <p>
            Powered by <span className={styles.stripe}>Stripe</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
