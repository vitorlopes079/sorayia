import React from "react";
import Image from "next/image";
import blogCardImage from "../images/blogCard.png";
import writerImage from "../images/testmphoto2.svg";
import time from "../images/time.svg";
import styles from "../css/blogCard.module.css"

const BlogCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={blogCardImage} width={400} height={244} />
      </div>
      <p className={styles.subTitle}>Technology News</p>
      <h4 className={styles.cardHeading}>The Latest Technology Trends</h4>
      <p className={styles.cardText}>
        Discover the latest technological innovations and their impact on our
        daily lives.
      </p>
      <div className={styles.authorContainer}>
        <div>
          <Image src={writerImage} width={56} height={56} />
        </div>
        <div className={styles.nameAndDate}>
          <p>John Smith</p>
          <p>11 Jan 2022</p>
        </div>
        <div className={styles.timeContainer}>
          <p>5 min read</p>
          <Image src={time} width={20} height={20} className={styles.time}/>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
