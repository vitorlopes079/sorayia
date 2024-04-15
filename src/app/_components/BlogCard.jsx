'use client'
import React from "react";
import Image from "next/image";
import blogCardImage from "../images/blogCard.png";
import writerImage from "../images/testmphoto2.svg";
import time from "../images/time.svg";
import styles from "../css/blogCard.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({
  title = "The Latest Technology Trends",
  subtitle = "Technology News",
  text = "Discover the latest technological innovations and their impact on our daily lives.",
  image = blogCardImage,
  nav = false,
}) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0, ease: 'easeOut' }}
      className={styles.container}>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        className={styles.imageContainer}>
        <Link href={`${nav ? `/blog/${nav}` : "#"}`}>
          <Image src={image} width={400} height={244} />
        </Link>
      </motion.div>
      <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }} >
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
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
