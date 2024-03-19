import React from "react";
import styles from "../css/resources.module.css";
import Image from "next/image";
import resourcesBanner from "../images/resourcersBanner.png";
import openai from "../images/openai.png";
import avatar2 from "../images/avatar2.png";
import plus from "../images/plus.png";
import gpt from "../images/gpt.png";
import ready from "../images/ready.png";
import arrowUp from "../images/arrow-up.png";
import Elipse from "../_components/Elipse";

const page = () => {
  return (
    <div className={styles.container}>
      <Elipse numberOfEllipses={4} />
      <section className={styles.hero}>
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            Sorayia.com Redefining Customer Experience
          </h1>
          <p className="centralizedText">
            In a world where technology shapes every aspect of our daily lives,
            Sorayia.com emerges as a pioneer of innovation in customer
            experience. Partnering with leading artificial intelligence (AI)
            experts such as OpenAI and Ready Player Me, Sorayia.com offers a
            revolutionary solution that transforms how businesses interact with
            their customers.
          </p>
          <div className={styles.bannerImageContainer}>
            <Image
              src={resourcesBanner}
              alt="Descriptive Alt Text"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 10%",
              }}
            />
          </div>

          <p className="centralizedText">
            In a world where technology shapes every aspect of our daily lives,
            Sorayia.com emerges as a pioneer of innovation in customer
            experience. Partnering with leading artificial intelligence (AI)
            experts such as OpenAI and Ready Player Me, Sorayia.com offers a
            revolutionary solution that transforms how businesses interact with
            their customers.
          </p>
        </div>
      </section>

      <section className={styles.guideSection}>
        <div className="roundedContainer">
          <p>Your AI Assist</p>
        </div>
        <div className={styles.guideSectionContent}>
          <div className={styles.guideSectionText}>
            <h1 className="leftHeading">Unparalleled Customer Experience</h1>
            <p className="leftText">
              Through our groundbreaking platform, businesses can now
              communicate with their customers in a more human and engaging
              manner than ever before. Our 3D avatar chatbots, powered by Open
              AI's AI intelligence, understand and respond to customer inquiries
              with exceptional accuracy and speed.
            </p>
          </div>
          <div className={styles.guideImageContainer}>
            <Image
              src={openai}
              width={573}
              height={303}
              alt="Descriptive Alt Text"
            />
          </div>
        </div>
      </section>

      <section className={styles.avatarSection}>
        <div className={styles.avatarTopDiv}>
          <div className={styles.avatarContainer}>
            <div className={styles.speechBalloonsContainer}>
              <div className={styles.speechBalloon}>
                <p>I'm your virtual 3D avatar</p>
              </div>
              <div className={styles.speechBalloon}>
                <p>Hi there!</p>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={avatar2}
                width={328}
                height={510}
                className={styles.avatarImage}
                alt="Descriptive Alt Text"
              />
            </div>
          </div>
          <div className={styles.avatarSectionTextContainer}>
            <div className="roundedContainer">
              <p>Your AI Assist</p>
            </div>
            <h2 className="leftHeading">Personalization and Creativity</h2>
            <p className="leftText">
              At Sorayia.com, we believe in the power of individual expression.
              That's why we've integrated Ready Player Me's 3D avatar creation
              technology into our platform, allowing our clients to customize
              their avatars according to their preferences and unique style.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.hero}>
        <div className="roundedContainer">
          <p>Powered by AI</p>
        </div>
        <div className={styles.flexDiv}>
          <h1 className="centralizedSubHeading">Actionable Data for Growth </h1>
          <p className="centralizedText">
            In addition to delivering an exceptional customer experience,
            Sorayia.com also provides valuable data to businesses to help them
            better understand their customers and make informed decisions. With
            our ability to collect and analyze data on customer interaction with
            our 3D avatar chatbots, we provide actionable insights that can be
            used to enhance products, optimize marketing strategies, and drive
            business growth.
          </p>
          <div className={styles.imagesContainer}>
            <div className={styles.image1Container}>
              <Image
                src={ready}
                width={276}
                height={182}
                alt="Ready Player Me logo"
              />
            </div>
            <Image src={plus} width={32} height={32} />
            <div className={styles.image2Container}>
              <Image src={gpt} alt="Descriptive Alt Text" />
            </div>
          </div>

          <p className="centralizedText">
            Sorayia.com stands at the forefront of innovation in customer
            experience, offering a comprehensive solution that combines
            cutting-edge technology, personalization, and strategic data. Join
            us today and discover how Sorayia.com can transform your customer
            interaction for the better, while propelling your business to new
            heights of success.
          </p>
          <div className={styles.buttonContainer}>
            <button className="buttonYellow ">
              Discover Sorayia.com
              <Image
                src={arrowUp}
                width={32}
                height={32}
                alt="Descriptive Alt Text"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
