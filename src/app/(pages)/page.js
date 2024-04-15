"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../css/homepage.module.css";
import arrowUpBlack from "../images/arrowUpBlack.svg"
import foldIcon from "../images/foldIcon.png";
import aiIcon from "../images/aiIcon.png";
import dbdIcon from "../images/dbIcon.png";
import screenshot from "../images/screenshot.png";
import screenshot2 from "../images/screenshot2.png";
import screenshot3 from "../images/screenshot3.png";
import sales from "../images/sales.png";
import checked from "../images/checked.svg";
import support from "../images/support.png";
import marketing from "../images/marketing.png";
import assitance from "../images/assitance.png";
import cahier from "../images/cahier.png";
import performace from "../images/performace.png";
import courseAssistance from "../images/courseAssistance.png";
import progresstracking from "../images/progresstracking.png";
import personalize from "../images/personalize.png";
import testimonyPhoto from "../images/testmphoto.svg";
import testimonyPhoto2 from "../images/testmphoto2.svg";
import chatbotChatImage from "../images/chatbotConv.svg";
import Elipse from "../_components/Elipse";
import Stack from "../_components/Stack";
import RoundedWidget from "../_components/RoundedWidget";
import MarketingCard from "../_components/MarketingCard";
import Testimonies from "../_components/Testimonies";
import HeroHomePage from "../_components/HeroHomePage";
import VideoContainer from "../_components/VideoContainer"


export default function Home() {
  return (
    <motion.div className="container">
      <Elipse
        background={
          "linear-gradient(180deg, rgba(210, 120, 234, 0.45) 25%, #D0A2BE 100%)"
        }
        top={"360px"}
        left={"-150px"}
        height={"390px"}
        width={"407px"}
      />
      <Elipse
        background={"rgba(4, 28, 184, 0.64)"}
        top={"800px"}
        right={"-150px"}
        height={"435px"}
        width={"481px"}
      />
      <Elipse
        background={"rgba(106, 70, 120, 0.71)"}
        top={"2200px"}
        left={"-120px"}
        height={"424px"}
        width={"457px"}
      />
      <Elipse
        background={"rgba(9, 25, 137, 0.73)"}
        top={"4250px"}
        right={"-150px"}
        height={"341px"}
        width={"376px"}
      />
      <Elipse
        background={"rgba(217, 217, 217, 0.32)"}
        top={"6350px"}
        right={"-60px"}
        height={"379px"}
        width={"405px"}
      />
      <Elipse
        background={"rgba(107, 70, 121, 0.82)"}
        top={"7200px"}
        left={"-150px"}
        height={"341px"}
        width={"376px"}
      />
      <Elipse
        background={"#161D5F"}
        top={"8000px"}
        right={"-150px"}
        height={"300px"}
        width={"300px"}
      />
      <HeroHomePage />

      <section className={styles.avatarSection}>
        <div className={styles.avatarTopDiv}>
          <div className={styles.avatarSectionTextContainer}>
            <RoundedWidget text={"Your 3D Avatar"} />

            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="leftHeading"
            >
              Transform yourself into a Virtual Star:
              <span className="gradient-text"> Create a 3D Avatar</span> that looks
              like you!
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="leftText"
            >
              Utilize our advanced 3D modeling technology to create an
              interactive 3D avatar. Design a virtual influencer that closely
              mirrors your appearance and personality, offering users an
              immersive and relatable experience.
            </motion.p>
          </div>
       
          <VideoContainer/> 

        </div>
        <div>
           <div className={styles.subheadingContainer}>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="centralizedHeading"
            >
              <span className="gradient-text">Chat-Bot </span>AI Assist
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="centralizedText"
            >
              Your own generative aI large language model framework designed and{" "}
              <br />
              launched in minutes without coding based on your resources.
            </motion.p>
          </div> 

          <div className={styles.cardsContainer}>
             <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className={styles.card}
            >
              <div className={styles.figureContainer}>
                <Image
                  src={aiIcon}
                  width={94}
                  height={94}
                  alt="Descriptive Alt Text"
                />
              </div>
              <h4 className={styles.cardTitle}>Stand Alone AI</h4>
              <p className="centralizedText">
                No dependencies on third party providers like Open AI, Google
                Bard or Bing AI.
              </p>
            </motion.div> 
        <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className={styles.card}
            >
              <div className={styles.figureContainer}>
                <div className={`${styles.chatbotChat} ${styles.chat1}`}>
                  <Image src={testimonyPhoto2} width={32} height={32} />
                  <p className={styles.chatbotText}>
                    Can you connect me with a sales agent?
                  </p>
                </div>
                <div className={`${styles.chatbotChat} ${styles.chat2}`}>
                  <Image src={testimonyPhoto} width={32} height={32} />
                  <p className={styles.chatbotText}>How long does it takes?</p>
                </div>
                <div className={`${styles.chatbotChat} ${styles.chat3}`}>
                  <Image src={chatbotChatImage} width={32} height={32} />
                  <p className={styles.chatbotText}>Thank you!</p>
                </div>
              </div>
              <h4 className={styles.cardTitle}>Right answer in a flash</h4>
              <p className="centralizedText">
                No dependencies on third party providers like Open AI, Google
                Bard or Bing AI.
              </p>
            </motion.div>
          <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className={styles.card}
            >
              <div className={styles.figureContainer}>
                <Image
                  src={foldIcon}
                  width={94}
                  height={94}
                  alt="folder icon"
                />
              </div>
              <h4 className={styles.cardTitle}>Multiple data sources</h4>
              <p className="centralizedText">
                No dependencies on third party providers like Open AI, Google
                Bard or Bing AI.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className={styles.card}
            >
              <div className={styles.figureContainer}>
                <Image src={dbdIcon} width={94} height={94} alt="db icon" />
              </div>
              <h4 className={styles.cardTitle}>Data secured</h4>
              <p className="centralizedText">
                No dependencies on third party providers like Open AI, Google
                Bard or Bing AI.
              </p>
            </motion.div> 
          </div>
        </div>
      </section>

       <section className={styles.guideSection}>
        <RoundedWidget text={"AI customer service agent"} />

        <div className={styles.guideSectionContent}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className={styles.guideSectionText}
          >
            <h1 className="leftHeading">
              The virtual guide who help you to{" "}
              <span className="gradient-text">growing business</span>
            </h1>
            <p className="leftText">
              Sorayia.com guarantees swift response times, resolving customer
              queries within 5 seconds or less by utilizing your existing
              database and conducting website scans for pertinent information.
              With its advanced natural language processing capabilities,
              Sorayia.com engages with customers in a human-like manner,
              delivering accurate and helpful responses. Beyond mere
              conversation, Sorayia.com
            </p>
            <p className="leftText">
              delves into data analysis, extracting actionable insights from
              gathered information to formulate lucrative business strategies.
              By comprehending customer needs and behaviors, Sorayia.com paves
              the way for revenue-generating opportunities.
            </p>
            <button className="buttonYellow">
              learn more
              <Image src={arrowUpBlack} width={32} height={32} alt="arrow up" />
            </button>
          </motion.div>
          <div className={styles.guideImageContainer}>
            <Image
              src={screenshot}
              width={628}
              height={497}
              alt="Descriptive Alt Text"
            />
            <div className="gradientCover"></div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0, delay: 1, ease: "easeOut" }}
              className={styles.blurContainer}
            ></motion.div>
          </div>
        </div>

        <div>
          <h1 className="centralizedSubHeading">
            <span className="gradient-text">Seamlessly automate engagement </span>
            across every <br />
            stage of the customer journey
          </h1>
          <p className="centralizedText">
            optimize customer relationships with scalable automation, empowering
            <br />
            personalized attention for top-tier clients.
          </p>
        </div>
        <div className="marketingCardsContainer">
          <MarketingCard
            title={"Sales"}
            imageSrc={sales}
            listItems={[
              "Qualify and segment leads",
              "Create personalize sales offer",
              "Pass leads to CRM",
              "Transfer qualified chat to sales representatives",
              "Schedule meetings",
            ]}
            shadow={"softPurple"}
          />
          <MarketingCard
            title={"Marketing"}
            imageSrc={marketing}
            listItems={[
              "Initiate conversations proactively with greeting",
              "Educate about products and services",
              "Collect leads and pass them to email marketing lists",
              "Launch AI bots on landing pages to boost conversations",
              "Schedule meetings",
            ]}
            shadow={"softPurple"}
          />
          <MarketingCard
            title={"Support"}
            imageSrc={support}
            listItems={[
              "Answer common questions with a virtual agent",
              "Resolve customer&apos;s problem",
              "Create support tickets",
              "Send links to help center articles or other educational content",
              "Transfer to live agents",
            ]}
            shadow={"softPurple"}
          />
        </div>
      </section>

       <section className={styles.guideSection}>
        <RoundedWidget text={"AI Human Ressource Agent"} />

        <div className={styles.guideSectionContent}>
          <motion.div className={styles.guideImageContainer}>
            <Image
              src={screenshot2}
              width={650}
              height={480}
              alt="descriptive image"
            />
            <div className="gradientCover gradientCoverLeft"></div>
            <div
              className={`${styles.blurContainer} ${styles.blurContainerLeft}`}
            ></div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className={styles.guideSectionText}
          >
            <h1 className="leftHeading">
              The Virtual Agent Simplifying HR Processes
            </h1>
            <p className="leftText">
              Sorayia.com is your solution for streamlined and efficient HR
              processes. We guarantee swift response times, resolving employee
              queries using your existing database. Equipped with advanced
              natural language processing capabilities,our chatbot interacts
              with employees in a human-like manner, providing precise and
              helpful responses while collecting data.
            </p>
            <p className="leftText">
              Beyond mere conversation, Sorayia.com delves into data analysis,
              extracting actionable insights to formulate effective Human
              Resource strategies. By understanding employees&apos; needs and
              behaviors, Sorayia.com paves the way for revenue-generating
            </p>
            <p className={`leftText ${styles.flex}`}>
              <Image
                src={checked}
                width={15}
                height={15}
                className={styles.checkedIcon}
                alt="ckecked"
                style={{ marginRight: "4px" }}
              />
              Answer common question with a virtual HR agent
            </p>
            <button className="buttonYellow">
              learn more
              <Image src={arrowUpBlack} width={32} height={32} alt="arrow up" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="centralizedSubHeading">
            Streamline human resource-related inquiries with <br/>
            <span className="gradient-text"> Seamless automation </span>
            at every stage.
          </h1>
          <p className="centralizedText">
            optimizing internal employee requests and external inquiries
            directed <br />
            to the human resources department.
          </p>
        </motion.div>
        <div className="marketingCardsContainer">
          <MarketingCard
            title="Employee Assistance"
            imageSrc={cahier}
            listItems={[
              "Resolve employees&apos; problems",
              "Send links, educational content, documents and help center articles",
              "Transfer to live HR agents",
            ]}
            shadow={"lavender"}
          />

          <MarketingCard
            title="Request Management"
            imageSrc={assitance}
            listItems={[
              "Automation of Recruitment Processes",
              "Request Tracking",
              "Collects urgent requests from employees",
              "Launch AI bots on landing pages and employee portal to boost usage",
            ]}
            shadow={"lavender"}
          />

          <MarketingCard
            title="Performance Management"
            imageSrc={performace}
            listItems={[
              "Data Analytics Dashboard",
              "Data Scraper Integration",
              "Collection and analysis of comments",
              "Create support tickets",
            ]}
            shadow={"lavender"}
          />
        </div>
      </section>
       <section className={styles.guideSection}>
        <RoundedWidget text={"AI Virtual Tutor"} />

        <div className={styles.guideSectionContent}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className={styles.guideSectionText}
          >
            <h1 className="leftHeading">
              The Virtual Tutor Revolutionizing Student Learning
            </h1>
            <p className="leftText">
              Instructing and addressing students&apos; inquiries is fundamental
              to enhancing their knowledge, facilitated by our chatbot. Our
              approach focuses on delivering comprehensive explanations tailored
              to individual learning needs, fostering critical thinking skills
              through interactive sessions and personalized feedback. We
              prioritize active participation, creating a supportive learning
              environment where questions are encouraged and curiosity is
              nurtured.
            </p>
            <p className="leftText">
              By promptly and effectively addressing student inquiries,
              empowered by our chatbot, we enable them to achieve academic
              success and unlock their full potential. Leveraging data analytics
              and sorting, we optimize content improvement and ensure precise
              control over student learning, anticipating future needs and
              developing targeted teaching strategies for effective learning
              outcomes.
            </p>

            <button className="buttonYellow">
              learn more
              <Image src={arrowUpBlack} width={32} height={32} alt="arrow up" />
            </button>
          </motion.div>
          <motion.div className={styles.guideImageContainer}>
            <Image
              src={screenshot3}
              alt="descriptive image"
              width={674}
              height={488}
            />
            <div className="gradientCover"></div>
            <div className={styles.blurContainer}></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="centralizedSubHeading">
            Instruct and address students&apos; inquiries to{" "}
            <span className="gradient-text">Enhance Their Knowledge</span>
          </h1>
          <p className="centralizedText">
            Improve the management of student requests and enhance their
            learning through the effective use <br />
            of reusable data to develop effective learning strategies.
          </p>
        </motion.div>
        <div className="marketingCardsContainer">
          <MarketingCard
            title="Course Assistance"
            imageSrc={courseAssistance}
            listItems={[
              "Answer common question about course with a virtual teacher agent",
              "Resolve students&apos; problems",
              "Send articles and educational content",
              "Create support tickets",
            ]}
            shadow={"violet"}
          />

          <MarketingCard
            title="Personalize Learning"
            imageSrc={personalize}
            listItems={[
              "Educate about courses related to the learning",
              "Provides answers adapted to learning levels",
              "Launch AI bots on student portal to boost usage",
            ]}
            shadow={"violet"}
          />

          <MarketingCard
            title="Progress Tracking"
            imageSrc={progresstracking}
            listItems={[
              "Data Analytics Dashboard",
              "Data Scraper Integration",
              "Collection and analysis of comments",
              "Create support tickets",
            ]}
            shadow={"violet"}
          />
        </div>
      </section>

      <section className={styles.testimonalSection}>
        <Stack />

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={styles.testimonialHeadingSection}
        >
          <h2 className="centralizedHeading">Testimonials</h2>
          <p className="centralizedText">what our customers say about us</p>
        </motion.div>

        <Testimonies />
      </section> 
    </motion.div>
  );
}
