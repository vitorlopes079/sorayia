'use client'
import React from "react";
import styles from "../../css/blogs.module.css";
import BlogCard from "../../_components/BlogCard";
import arrowLeft from "../../images/arrowLeft.svg";
import arrowRight from "../../images/arrowRight.svg";
import Image from "next/image";
import Elipse from "../../_components/Elipse";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className={styles.container}>
      <Elipse numberOfEllipses={2} />

      <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        className={styles.TextContainer}>
        <div className="roundedContainer">
          <p>Blogs</p>
        </div>
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            Discover the World of Knowledge with Sorayia
          </h1>
          <p className="centralizedText">
            Join us in this exciting adventure of discovery and learning.
          </p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        className={styles.filterContainer}>
        <div className="roundedContainer">
          <p>View All</p>
        </div>
        <div className="roundedContainer">
          <p>Artificial intelligence</p>
        </div>
        <div className="roundedContainer">
          <p>Automation</p>
        </div>
        <div className="roundedContainer">
          <p>Chatbot AI</p>
        </div>
        <div className="roundedContainer">
          <p>Widget</p>
        </div>
      </motion.div>
      <div className={styles.BlogCardsContainer}>
        <BlogCard
          title={"HR Chatbots Revolution"}
          text={"Transforming Employee Experience"}
          nav={"chatbots-revolution"}
        />
        <BlogCard
          title={"Maximizing Customer Service Efficiency with Chatbots"}
          nav={"maximizing-customer-service"}
        />
        <BlogCard
          title={"Revolutionizing Customer Interactions"}
          text={"The Power of Bespoke Chatbots"}
          nav={"revolutionizing-customer-interactions"}
        />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once:true}} transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        className={styles.paginationContainer}>
        <div className={styles.arrowContainer}>
          <Image src={arrowRight} height={25} width={25} />
        </div>
        <div className={styles.numberContainer}>1</div>
        <div className={styles.numberContainer}>2</div>
        <div className={styles.numberContainer}>...</div>
        <div className={styles.numberContainer}>9</div>
        <div className={styles.numberContainer}>10</div>
        <div className={styles.arrowContainer}>
          <Image src={arrowLeft} height={25} width={25} />
        </div>
      </motion.div>
    </div>
  );
};

export default page;
