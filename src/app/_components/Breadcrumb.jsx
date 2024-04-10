import React from "react";
import styles from "../css/post.module.css"
import Link from "next/link";

const Breadcrumb = () => {
  return (
    <nav className={styles.breadcrumbContainer}>
      <ul className={styles.breadcrumb}>
        <li className={styles.breadcrumbIitem}>
          <Link href={"/blog"} className={styles.link}>Blog</Link>
        </li>
        <li> &gt; </li>
        <li className={styles.breadcrumbActive}>Article Page</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
