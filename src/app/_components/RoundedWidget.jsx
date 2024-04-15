'use client'
import React from "react";
import Image from "next/image";
import Star from "../images/star.png";
import { motion } from "framer-motion";

const RoundedWidget = ({ text, star = false, id = ""}) => {
  return (
    <motion.div initial={{opacity:0,y:-30}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:1.5 , delay:0.5 , ease:'easeOut'}}
    className="roundedContainer" id={id}>
<p style={star ? { marginRight: "10px" } : {}}>{text}</p>
      {star && <Image src={Star} width={18} height={18} alt="star" />}
    </motion.div>
  );
};

export default RoundedWidget;
