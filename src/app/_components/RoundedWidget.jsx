import React from "react";
import Image from "next/image";
import Star from "../images/star.png";

const RoundedWidget = ({ text, star = false, id = ""}) => {
  return (
    <div className="roundedContainer" id={id}>
      <p style={{ marginRight: "10px" }}>{text}</p>
      {star && <Image src={Star} width={18} height={18} alt="star" />}
    </div>
  );
};

export default RoundedWidget;
