"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import FAQup from "../images/FAQ-icon-up.svg";
import FAQdown from "../images/FAQ-icon-down.svg";
import styles from "../css/product.module.css";

const Question = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  const toggleAnswer = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      // Add a buffer to ensure all text is shown
      setContentHeight(`${contentRef.current.scrollHeight + 70}px`);
    } else {
      setContentHeight("0px");
    }
  }, [isExpanded]);

  const renderAnswer = () => {
    if (Array.isArray(answer)) {
      return answer.map((line, index) => <p key={index}>{line}</p>);
    } else {
      return <p>{answer}</p>;
    }
  };

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionText} onClick={toggleAnswer}>
        <div className={styles.faqIconContainer}>
          <Image src={isExpanded ? FAQup : FAQdown} height={8} width={18} />
        </div>
        <p>{question}</p>
      </div>
      <div
        className={`${styles.answerContainer} ${
          isExpanded ? styles.answerContainerExpanded : ""
        }`}
        style={{ maxHeight: contentHeight }}
      >
        <div className={styles.answerContent} ref={contentRef}>
          {renderAnswer()}
        </div>
      </div>
    </div>
  );
};

export default Question;
