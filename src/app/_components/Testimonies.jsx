import React from "react";
import Testimony from "./Testimony"; 
import testimonyPhoto from "../images/testmphoto.svg";
import testimonyPhoto2 from "../images/testmphoto2.svg";
import testimonyPhoto3 from "../images/testmphoto3.svg";
import styles from "../css/homepage.module.css";

const Testimonies = () => {
  const testimoniesData = [
    {
      photo: testimonyPhoto,
      name: "Alexa Horan S.",
      text: "Implementing the chatbot has significantly reduced our customer support costs. It's like having an extra team member without the overhead."
    },
    {
      photo: testimonyPhoto2,
      name: "Michael Liu",
      text: "Our customers appreciate the 24/7 availability of the chatbot. Whether they're seeking product information, troubleshooting, or just saying hello, the chatbot is there to assist."
    },
    {
      photo: testimonyPhoto3,
      name: "Jeffrey Byrd",
      text: "The chatbot's ability to understand and respond to user input using NLP is impressive. It feels like having a real conversation with a knowledgeable assistant."
    }
  ];

  return (
    <div className={styles.testimoniesContainer}>
      {testimoniesData.map((testimony, index) => (
        <Testimony
          key={index}
          photo={testimony.photo}
          name={testimony.name}
          text={testimony.text}
          containerStyle={index === 1 ? styles.testimonyContainerCenter : styles.testimonyContainer}

        />
      ))}
    </div>
  );
};

export default Testimonies;