"use client";
import React from "react";
import styles from "../../css/solutions.module.css";
import Elipse from "../../_components/Elipse";
import Image from "next/image";
import product from "../../images/product.png";
import solutionsChat from "../../images/solutions-chat.png";
import onlineStore from "../../images/online-store.png";
import solutionsMarketing from "../../images/solutions-marketing.png";
import talk from "../../images/talk.png";
import preset from "../../images/present.png";
import solutions1 from "../../images/solutions1.png";
import solutions2 from "../../images/solutions2.png";
import solutions3 from "../../images/solutions3.png";
import arrowUp from "../../images/arrowUp.svg";
import arrowDown from "../../images/arrow-down.svg";
import chat2 from "../../images/chat2.png";
import growth2 from "../../images/growth2.png"
import continuous from "../../images/continuous.png";
import schedule2 from "../../images/schedule2.png";
import continuous2 from "../../images/continuous2.png";
import team2 from "../../images/team2.png";
import marketcall from "../../images/marketcall.png";
import spyware from "../../images/spyware.png";
import issue from "../../images/issue.png";
import MarketingCard from "../../_components/MarketingCard";
import RoundedWidget from "../../_components/RoundedWidget";
import { motion } from "framer-motion";
import VerticalSwitch from "../../_components/VerticalSwitch";

const page = () => {
  return (
    <div className="container containerPaddingCustom">
      <Elipse
        background={"rgba(217, 217, 217, 0.32)"}
        top={"260px"}
        left={"-150px"}
        height={"326px"}
        width={"270px"}
      />

      <Elipse
        background={"linear-gradient(180deg, #A14BE5 0%, #2252B1 100%)"}
        top={"2350px"}
        right={"-100px"}
        height={"354px"}
        width={"309px"}
      />

      <Elipse
        background={"rgba(217, 217, 217, 0.32)"}
        top={"3500px"}
        left={"-70px"}
        height={"354px"}
        width={"309px"}
      />

      <Elipse
        background={"linear-gradient(180deg, #3961AE 0%, #6587C9 100%)"}
        top={"4600px"}
        right={"-150px"}
        height={"307px"}
        width={"271px"}
      />

      <Elipse
        background={"rgba(217, 217, 217, 0.32)"}
        top={"5600px"}
        left={"-50px"}
        height={"333px"}
        width={"333px"}
      />
      <motion.section className={styles.hero} id="marketing">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className={styles.heroHeadingContainer}
        >
          <h1 className={styles.heroHeading}>
            Power up your <span className="gradient-text">marketing strategy</span>{" "}
            with Sorayia.<span className="lowercase">com</span>
          </h1>
          <p className="centralizedText">
            Revolutionize your marketing game with Sorayia.
            <span className="lowercase">com</span>! Elevate your brand&apos;s
            presence, engage your audience, and dominate your market with our
            cutting-edge solutions. Unleash the power of Sorayia.
            <span className="lowercase">com</span> to propel your business to
            new heights of success.
          </p>
        </motion.div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title="Chatbot for Marketing and Growth"
            imageSrc={solutionsMarketing}
            listItems={[
              "Optimize your marketing strategy with conversational AI",
              "Use the chatbot for lead generation.",
              "Generate more qualified leads through conversations and automatically qualify your prospects.",
            ]}
            shadow={"purpleShadow"}
          />

          <MarketingCard
            title="E-commerce Customer Service Chatbot"
            imageSrc={onlineStore}
            listItems={[
              "Turn Traffic into Growing Revenue",
              "Build better relationships with real-time communication and get more satisfied customers",
              "Support Visitors at Every Stage of their Decision-Making Process and Dispel their Doubts in an Instant",
            ]}
            shadow={"purpleShadow"}
          />

          <MarketingCard
            title="Increase Conversion Rates with AI Chatbots"
            imageSrc={preset}
            listItems={[
              "Boost your conversion rates",
              "Sell more products using chatbots and effortlessly increase your revenue",
              "Open new customer acquisition channels",
              "Automate and enhance your marketing with AI chatbots",
            ]}
            shadow={"purpleShadow"}
          />
        </div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title="Chatbot Conversation Widget for your Website"
            imageSrc={solutionsChat}
            listItems={[
              "Engage more visitors on your website",
              "Add a conversation widget to your website in just a few clicks and automate communication with potential customers.",
            ]}
            shadow={"purpleShadow"}
          />
          <MarketingCard
            title="Chatbots for Better Customer Experience"
            imageSrc={talk}
            listItems={[
              "Improve Customer Experience",
              "Offer personalized recommendations and tailored customer support",
              "Engage more customers with the chatbot",
              "Proactively engage visitors. Turn prospects into satisfied customers",
            ]}
            shadow={"purpleShadow"}
          />
          <MarketingCard
            title="Showcase your Products"
            imageSrc={product}
            listItems={[
              "Display your Products in the Right Way",
              "Promote Special Discounts",
              "Use personalized greetings and rich messages to inform users about seasonal discounts and promotional campaigns",
              "Create support tickets",
            ]}
            shadow={"purpleShadow"}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className={styles.underCardsText}
        >
          <p className="centralizedText">
            Start using Chat-Bot to grow your business. Chat-Bot templates
            included. No programming skills required.
          </p>
          <p className="centralizedText">
            Boost your customer experience with personalized communication.
            Automate user segmentation and create personalized user lists.
            Tailor your communication to different types of customers and foster
            natural conversations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="buttonsContainer"
        >
          <button className="buttonBorderGradient">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className={styles.textCallSection}
      >
        <RoundedWidget text={"For Sales"} id={"sales"} />
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            <span className="gradient-text">Optimizing Your Sales Process</span>{" "}
            with Sorayia.<span className="lowercase">com</span>
          </h1>
          <p className="centralizedText">
            In today&apos;s competitive market, optimizing the sales process is
            essential for driving revenue growth and enhancing customer
            experience. Sorayia.<span className="lowercase">com</span> offers a
            cutting-edge solution that leverages chatbots to automate and
            streamline your sales pipeline, from lead qualification to sales
            closing, providing personalized and instant support every step of
            the way.
          </p>
        </div>
      </motion.section>

      <section className={styles.solutionsPosts}>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={styles.iconAndText}
        >
          <div className={styles.iconAndTitle}>
            <div className={styles.iconContainer}>
              <Image src={chat2} width={60} height={60} />
            </div>
            <h1 className="leftHeading">Fully Automated Chatbot for Sales</h1>
          </div>
          <div className={styles.guideSectionContent}>
            <div className={styles.guideSectionText}>
              <div className={styles.verticalContainer}>

                <VerticalSwitch variant="first" />

              </div>
              <div className={styles.guideTextContainer}>
                <p className="leftText">
                  With Sorayia.<span className="lowercase">com</span>, you can
                  implement a standalone chatbot tailored specifically for your
                  sales process. This intelligent assistant handles various tasks
                  seamlessly, ensuring efficient lead generation, pers onalized
                  recommendations, scheduling sales calls and meetings,
                  transforming web forms into engaging conversations, and
                  seamlessly integrating data into your CRM system.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
        <div className={styles.guideImageContainer}>
          <Image
            src={solutions1}
            width={628}
            height={400}
            alt="descriptive image"
          />
          <div className="gradientCover"></div>
        </div>
      </section>

      <section className={styles.solutionsPosts}>
        <div className={styles.guideImageContainer}>
          <Image
            src={solutions2}
            width={628}
            height={400}
            alt="descriptive image"
          />
          <div className="gradientCover gradientCoverLeft"> </div>
        </div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={styles.iconAndText}
        >
          <div className={styles.iconAndTitle} style={{ marginLeft: "25px" }}>
            <div className={styles.iconContainer}>
              <Image src={growth2} width={60} height={60} />
            </div>
            <h1 className="leftHeading">
              Grow Your Sales Together with a Chatbot
            </h1>
          </div>
          <div className={styles.guideSectionContent} style={{ marginLeft: "25px" }}> 



            <div className={styles.guideSectionText} >
              <div className={styles.verticalContainer}>
                <VerticalSwitch variant="first" />
              </div>
              <div className={styles.guideTextContainer}>
                <p className="leftText">
                  Collaboration is key to success in sales. Sorayia.
                  <span className="lowercase">com</span> allows you to add a smart
                  assistant to your team, empowering your sales reps to work more
                  effectively. Effortlessly segment leads, connect them with the
                  right sales representatives in real-time, simplify the process
                  of sending sales inquiries, and even enable customers to call
                  you directly from the chat widget for immediate assistance.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      <section className={styles.solutionsPosts}>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={styles.iconAndText}
        >
          <div className={styles.iconAndTitle}>
            <div className={styles.iconContainer}>
              <Image src={continuous} width={60} height={60} />
            </div>
            <h1 className="leftHeading">
              Automate Sales Processes and Scale Efficiently
            </h1>
          </div>
          <div className={styles.guideSectionContent}>
            <div className={styles.guideSectionText}>
              <div className={styles.verticalContainer}>
                <VerticalSwitch variant="first" />
              </div>
              <div className={styles.guideTextContainer}>
                <p className="leftText">
                  By leveraging Sorayia.<span className="lowercase">com</span>
                  &apos;s smart chatbot for sales, you can scale your operations
                  without adding unnecessary overhead. Create new sales
                  opportunities, drive your sales team&apos;s efforts forward,
                  diversify your lead generation strategy, and improve sales
                  efficiency—all without the need to increase headcount or
                  resources.
                </p>
                <p className="leftText">
                  Incorporating Sorayia.<span className="lowercase">com</span>{" "}
                  into your sales strategy enables you to optimize your sales
                  process, enhance customer experience, and drive revenue growth.
                  With automated chatbots, you can streamline operations, empower
                  your sales team, and focus on what truly matters—building
                  meaningful relationships with your customers and closing more
                  deals. Elevate your sales performance with Sorayia.
                  <span className="lowercase">com</span> today.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
        <div className={styles.guideImageContainer}>
          <Image
            src={solutions3}
            width={628}
            height={400}
            alt="descriptive image"
          />
          <div className="gradientCover"></div>
          {/* <div className={styles.blurContainer5}></div> */}
        </div>
      </section>

      <section className={styles.textCallSection}>
        <RoundedWidget text={"Customer Support"} id={"customer-support"} />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className={styles.heroHeadingContainer}
        >
          <h1 className={styles.heroHeading}>
            Offer <span className="gradient-text">Consistent Support,</span>{" "}
            Anytime, Anywhere
          </h1>
          <p className="centralizedText">
            Sorayia.<span className="lowercase">com</span> enables you to
            resolve problems faster by utilizing visuals and interactive forms
            to explain technical issues. Our chatbots streamline the resolution
            process, guiding customers through troubleshooting steps with
            clarity and efficiency, ultimately reducing resolution time and
            enhancing satisfaction.
          </p>
        </motion.div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title={"Resolve Problems Faster with Visuals and Interactivity"}
            imageSrc={issue}
            centralized={true}
            text={`Sorayia.com enables you to resolve problems faster by utilizing
            visuals and interactive forms to explain technical issues. Our
            chatbots streamline the resolution process, guiding customers
            through troubleshooting steps with clarity and efficiency,
            ultimately reducing resolution time and enhancing satisfaction.`}
            shadow={"blueShadow"}
          />

          <MarketingCard
            title={"Offer Consistent Support, Anytime, Anywhere"}
            imageSrc={spyware}
            centralized={true}
            text={`With Sorayia.com, you can provide consistent support across
            channels, allowing customers to resolve issues at their
            convenience, day or night. Our chatbots are available 24/7,
            ensuring that no customer query goes unanswered and delivering a
            seamless support experience across all touchpoints.`}
            shadow={"blueShadow"}
          />

          <MarketingCard
            title={"Boost Team Productivity with Automated Responses"}
            imageSrc={marketcall}
            centralized={true}
            text={`Empower your support team to focus on more challenging cases by
            automating the answering of repetitive questions with Sorayia.com.
            Our chatbots handle common inquiries swiftly and accurately,
            freeing up valuable time for your team to address complex issues
            and provide personalized support where it&apos;s needed most.`}
            shadow={"blueShadow"}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="buttonsContainer"

        >
          <button className="buttonBorderGradient">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </motion.div>
      </section>

      <section className={styles.textCallSection}>
        <RoundedWidget text="Human Resources" id="human-resources" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className={styles.heroHeadingContainer}
        >
          <h1 className={styles.heroHeading}>
            <span className="gradient-text">Automating HR Processes</span> with
            Sorayia.<span className="lowercase">com</span> Chatbots
          </h1>
          <p className="centralizedText">
            In the ever-evolving landscape of Human Resources (HR), efficiency
            and streamlining processes are paramount. Sorayia.
            <span className="lowercase">com</span>, with its advanced chatbot
            technology, offers a groundbreaking solution to automate various HR
            tasks, from initial recruitment to staff training and leave
            management. Let&apos;s delve into how Sorayia.
            <span className="lowercase">com</span> can revolutionize HR
            practices, enhancing efficiency and reducing administrative burdens.
          </p>
        </motion.div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title="Introduction to Sorayia.com in HR Automation"
            imageSrc={team2}
            listItems={[
              "Introducing Sorayia.com Chatbots",
              "Brief overview of Sorayia.com and its role in automating HR processes",
              "Highlight the benefits of using chatbots for HR tasks",
            ]}
            shadow={"pinkShadow"}
          />

          <MarketingCard
            title="Automating Initial Recruitment"
            imageSrc={continuous2}
            listItems={[
              "Efficient Candidate Screening",
              "Sorayia.com's chatbots streamline the initial recruitment process by efficiently screening resumes based on predefined criteria",
              "Discuss how chatbots can schedule interviews with candidates, saving time for HR professionals",
            ]}
            shadow={"pinkShadow"}
          />

          <MarketingCard
            title="Simplifying Leave Management"
            imageSrc={schedule2}
            listItems={[
              "Automated Leave Requests",
              "Sorayia.com facilitates automated leave request submissions for employees, ensuring seamless approval processes",
              "Discuss the reduction in administrative tasks and the accuracy of leave tracking with Sorayia.com.",
            ]}
            shadow={"pinkShadow"}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="buttonsContainer"
        >
          <button className="buttonBorderGradient">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </motion.div>
      </section>

      <section className={styles.bottomSection}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className={styles.TextContainer}
        >
          <RoundedWidget
            text={"Education and Formation"}
            id={"education-and-formation"}
          />
          <div className={styles.heroHeadingContainer}>
            <h1 className={styles.heroHeading}>
              Revolutionizing Education and Training with{" "}
              <span className="gradient-text">
                Sorayia.<span className="lowercase">com</span> Chatbots
              </span>
            </h1>
            <p className="centralizedText">
              In the realm of education and training, innovation is key to
              fostering engagement and improving learning outcomes. Sorayia.
              <span className="lowercase">com</span>
              introduces a groundbreaking solution with its advanced chatbot
              technology, revolutionizing the way learning and training are
              conducted. Let&apos;s explore how Sorayia.
              <span className="lowercase">com</span> chatbots automate learning
              processes, provide personalized responses, and facilitate access
              to educational resources, enhancing the educational experience for
              both students and staff.
            </p>
          </div>
        </motion.div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title={
              "Introduction to Sorayia.com Chatbots in Education and Training"
            }
            imageSrc={solutionsMarketing}
            listItems={[
              "Introducing Sorayia.com&apos;s Educational Chatbots",
              "Overview of Sorayia.com&apos;s role in transforming traditional learning and training methods",
              "Highlight the benefits of using chatbots for interactive and personalized learning experiences",
            ]}
            shadow={"subtleBlue"}
          />

          <MarketingCard
            title="Facilitating Access to Educational Resources"
            imageSrc={onlineStore}
            listItems={[
              "Seamless Resource Access",
              "Sorayia.com&apos;s chatbots facilitate access to a wide range of educational resources, including textbooks, articles, and multimedia materials",
              "Discuss the advantages of interactive learning in enhancing student engagement and retention",
            ]}
            shadow={"subtleBlue"}
          />
        </div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title="Personalized Responses to Student or Staff Questions"
            imageSrc={solutionsMarketing}
            listItems={[
              "Tailored Support and Assistance",
              "Sorayia.com&apos;s chatbots provide personalized responses to student or staff inquiries, addressing their specific needs and concerns",
              "Explore how personalized support improves learning outcomes and boosts confidence",
            ]}
            shadow={"subtleBlue"}
          />
          <MarketingCard
            title="Automating Learning Processes"
            imageSrc={onlineStore}
            listItems={[
              "Interactive Learning Modules",
              "Sorayia.com&apos;s chatbots deliver interactive lessons and modules tailored to individual learning styles and preferences",
              "Discuss the advantages of interactive learning in enhancing student engagement and retention",
            ]}
            shadow={"subtleBlue"}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="buttonsContainer"
        >
          <button className="buttonBorderGradient">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default page;
