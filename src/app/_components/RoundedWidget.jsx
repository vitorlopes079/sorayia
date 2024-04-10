'use client'
import React from "react";
import Image from "next/image";
import Star from "../images/star.png";
import { motion } from "framer-motion";

const RoundedWidget = ({ text, star = false, id = ""}) => {
  return (
    <motion.div initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.5,ease:"easeOut", delay:0.5}} className="roundedContainer" id={id}>
      <p style={{ marginRight: "10px" }}>{text}</p>
      {star && <Image src={Star} width={18} height={18} alt="star" />}
    </motion.div>
  );
};

export default RoundedWidget;
