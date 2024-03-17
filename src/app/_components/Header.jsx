import React from "react";
import { Montagu_Slab } from "next/font/google";
import Image from "next/image";
import logo from "../images/logo.png";
import styles from "../css/header.module.css";

const Montagu = Montagu_Slab({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image src={logo} />
        <p className={`${Montagu.className} ${styles.logo}`}>Soraya</p>
      </div>
      <nav>
        <ul className={styles.navWrapper}>
          <li className={styles.navLink}>Product</li>
          <li className={styles.navLink}>Pricing</li>
          <li className={styles.navLink}>Resources</li>
          <li className={styles.navLink}>Solutions</li>
          <li className={styles.navLink}>Blog</li>
        </ul>
      </nav>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button1}>Login</button>
        <button className={styles.button2}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
