import React from "react";
import Image from "next/image";
import blogCardImage from "../images/blogCard.png";
import writerImage from "../images/testmphoto2.svg";
import time from "../images/time.svg";
import styles from "../css/blogCard.module.css";
import Link from "next/link";

const BlogCard = ({
  title = "The Latest Technology Trends",
  subtitle = "Technology News",
  text = "Discover the latest technological innovations and their impact on our daily lives.",
  image = blogCardImage,
  nav = false,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href={`${nav ? `/blog/${nav}` : "#"}`}>
          <Image src={image} width={400} height={244} />
        </Link>
      </div>
      <p className={styles.subTitle}>{subtitle}</p>
      <Link className={styles.link} href={`${nav ? `/blog/${nav}` : "#"}`}>
        <h4 className={styles.cardHeading}>{title}</h4>
      </Link>

      <p className={styles.cardText}>{text}</p>
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
          <Image src={time} width={20} height={20} className={styles.time} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
