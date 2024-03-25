import React from "react";
import styles from "../css/solutions.module.css";
import Elipse from "../_components/Elipse";
import Image from "next/image";
import product from "../images/product.png";
import solutionsChat from "../images/solutions-chat.png";
import onlineStore from "../images/online-store.png";
import solutionsMarketing from "../images/solutions-marketing.png";
import talk from "../images/talk.png";
import preset from "../images/present.png";
import solutions1 from "../images/solutions1.png";
import solutions2 from "../images/solutions2.png";
import solutions3 from "../images/solutions3.png";
import arrowUp from "../images/arrow-up.png";
import arrowDown from "../images/arrow-down.svg";
import chat2 from "../images/chat2.png";
import growth from "../images/growth.png";
import continuous from "../images/continuous.png";
import schedule2 from "../images/schedule2.png";
import continuous2 from "../images/continuous2.png";
import team2 from "../images/team2.png";
import marketcall from "../images/marketcall.png";
import spyware from "../images/spyware.png";
import issue from "../images/issue.png";
import MarketingCard from "../_components/MarketingCard";

/* this page will hava all the alts set */

const page = () => {
  return (
    <div className={styles.container}>
      <Elipse numberOfEllipses={4} />
      <section className={styles.hero}>
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            Power up your <span className="yellowSpan">marketing strategy</span>{" "}
            with Sorayia.com
          </h1>
          <p className="centralizedText">
            Revolutionize your marketing game with Sorayia.com! Elevate your
            brand&apos;s presence, engage your audience, and dominate your
            market with our cutting-edge solutions. Unleash the power of
            Sorayia.com to propel your business to new heights of success.
          </p>
        </div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title="Chatbot for Marketing and Growth"
            imageSrc={solutionsMarketing}
            listItems={[
              "Optimize your marketing strategy with conversational AI",
              "Use the chatbot for lead generation.",
              "Generate more qualified leads through conversations and automatically qualify your prospects.",
            ]}
          />

          <MarketingCard
            title="E-commerce Customer Service Chatbot"
            imageSrc={onlineStore}
            listItems={[
              "Turn Traffic into Growing Revenue",
              "Build better relationships with real-time communication and get more satisfied customers",
              "Support Visitors at Every Stage of their Decision-Making Process and Dispel their Doubts in an Instant",
            ]}
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
          />
        </div>

        <div className={styles.underCardsText}>
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
        </div>
        <div>
          <button className="buttonYellow buttonMargin">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </div>
      </section>

      <section className={styles.textCallSection}>
        <div className="roundedContainer">
          <p>For Sales</p>
        </div>
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            <span className="yellowSpan">Optimizing Your Sales Process</span>{" "}
            with Sorayia.com
          </h1>
          <p className="centralizedText">
            In today's competitive market, optimizing the sales process is
            essential for driving revenue growth and enhancing customer
            experience. Sorayia.com offers a cutting-edge solution that
            leverages chatbots to automate and streamline your sales pipeline,
            from lead qualification to sales closing, providing personalized and
            instant support every step of the way.
          </p>
        </div>
      </section>

      <section className={styles.solutionsPosts}>
        <div className={styles.iconAndText}>
          <div>
            <Image src={chat2} width={60} height={60} />
          </div>
          <div className={styles.guideSectionContent}>
            <div className={styles.guideSectionText}>
              <h1 className="leftHeading">Fully Automated Chatbot for Sales</h1>
              <p className="leftText">
                With Sorayia.com, you can implement a standalone chatbot
                tailored specifically for your sales process. This intelligent
                assistant handles various tasks seamlessly, ensuring efficient
                lead generation, personalized recommendations, scheduling sales
                calls and meetings, transforming web forms into engaging
                conversations, and seamlessly integrating data into your CRM
                system.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.guideImageContainer}>
          <Image
            src={solutions1}
            width={628}
            height={400}
            alt="descriptive image"
          />
          <div className="gradientCover"></div>
          <div className={styles.blurContainer3}></div>
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
          <div className={styles.blurContainer4}></div>

        </div>
        <div className={styles.iconAndText}>
          <div>
            <Image
              src={growth}
              width={60}
              height={60}
              style={{ marginLeft: "25px" }}
            />
          </div>
          <div className={styles.guideSectionContent}>
            <div className={styles.guideSectionText}>
              <h1 className="leftHeading">
                Grow Your Sales Together with a Chatbot
              </h1>
              <p className="leftText">
                Collaboration is key to success in sales. Sorayia.com allows you
                to add a smart assistant to your team, empowering your sales
                reps to work more effectively. Effortlessly segment leads,
                connect them with the right sales representatives in real-time,
                simplify the process of sending sales inquiries, and even enable
                customers to call you directly from the chat widget for
                immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.solutionsPosts}>
        <div className={styles.iconAndText}>
          <div>
            <Image src={continuous} width={60} height={60} />
          </div>
          <div className={styles.guideSectionContent}>
            <div className={styles.guideSectionText}>
              <h1 className="leftHeading">
                Automate Sales Processes and Scale Efficiently
              </h1>
              <p className="leftText">
                By leveraging Sorayia.com's smart chatbot for sales, you can
                scale your operations without adding unnecessary overhead.
                Create new sales opportunities, drive your sales team's efforts
                forward, diversify your lead generation strategy, and improve
                sales efficiency—all without the need to increase headcount or
                resources.
              </p>
              <p className="leftText">
                Incorporating Sorayia.com into your sales strategy enables you
                to optimize your sales process, enhance customer experience, and
                drive revenue growth. With automated chatbots, you can
                streamline operations, empower your sales team, and focus on
                what truly matters—building meaningful relationships with your
                customers and closing more deals. Elevate your sales performance
                with Sorayia.com today.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.guideImageContainer}>
          <Image
            src={solutions3}
            width={628}
            height={400}
            alt="descriptive image"
          />
          <div className="gradientCover"></div>
          <div className={styles.blurContainer5}></div>

        </div>
      </section>

      <section className={styles.textCallSection}>
        <div className="roundedContainer">
          <p>Customer Support</p>
        </div>
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            Offer <span className="yellowSpan">Consistent Support,</span>{" "}
            Anytime, Anywhere
          </h1>
          <p className="centralizedText">
            Sorayia.com enables you to resolve problems faster by utilizing
            visuals and interactive forms to explain technical issues. Our
            chatbots streamline the resolution process, guiding customers
            through troubleshooting steps with clarity and efficiency,
            ultimately reducing resolution time and enhancing satisfaction.
          </p>
        </div>

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
          />

          <MarketingCard
            title={"Boost Team Productivity with Automated Responses"}
            imageSrc={marketcall}
            centralized={true}
            text={`Empower your support team to focus on more challenging cases by
            automating the answering of repetitive questions with Sorayia.com.
            Our chatbots handle common inquiries swiftly and accurately,
            freeing up valuable time for your team to address complex issues
            and provide personalized support where it's needed most.`}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className="buttonYellow buttonMargin">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </div>
      </section>

      <section className={styles.textCallSection}>
        <div className="roundedContainer">
          <p>Human Resources</p>
        </div>
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            <span className="yellowSpan">Automating HR Processes</span> with
            Sorayia.com Chatbots
          </h1>
          <p className="centralizedText">
            In the ever-evolving landscape of Human Resources (HR), efficiency
            and streamlining processes are paramount. Sorayia.com, with its
            advanced chatbot technology, offers a groundbreaking solution to
            automate various HR tasks, from initial recruitment to staff
            training and leave management. Let's delve into how Sorayia.com can
            revolutionize HR practices, enhancing efficiency and reducing
            administrative burdens.
          </p>
        </div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title="Introduction to Sorayia.com in HR Automation"
            imageSrc={team2}
            listItems={[
              "Introducing Sorayia.com Chatbots",
              "Brief overview of Sorayia.com and its role in automating HR processes",
              "Highlight the benefits of using chatbots for HR tasks",
            ]}
          />

          <MarketingCard
            title="Automating Initial Recruitment"
            imageSrc={continuous2}
            listItems={[
              "Efficient Candidate Screening",
              "Sorayia.com's chatbots streamline the initial recruitment process by efficiently screening resumes based on predefined criteria",
              "Discuss how chatbots can schedule interviews with candidates, saving time for HR professionals",
            ]}
          />

          <MarketingCard
            title="Simplifying Leave Management"
            imageSrc={schedule2}
            listItems={[
              "Automated Leave Requests",
              "Sorayia.com facilitates automated leave request submissions for employees, ensuring seamless approval processes",
              "Discuss the reduction in administrative tasks and the accuracy of leave tracking with Sorayia.com.",
            ]}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className="buttonYellow buttonMargin">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </div>
      </section>

      <section className={styles.bottomSection}>
        <div className={styles.TextContainer}>
          <div className="roundedContainer">
            <p>Education and Formation</p>
          </div>
          <div className={styles.heroHeadingContainer}>
            <h1 className={styles.heroHeading}>
              Revolutionizing Education and Training with{" "}
              <span className="yellowSpan">Sorayia.com Chatbots</span>
            </h1>
            <p className="centralizedText">
              In the realm of education and training, innovation is key to
              fostering engagement and improving learning outcomes. Sorayia.com
              introduces a groundbreaking solution with its advanced chatbot
              technology, revolutionizing the way learning and training are
              conducted. Let's explore how Sorayia.com chatbots automate
              learning processes, provide personalized responses, and facilitate
              access to educational resources, enhancing the educational
              experience for both students and staff.
            </p>
          </div>
        </div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title={
              "Introduction to Sorayia.com Chatbots in Education and Training"
            }
            imageSrc={solutionsMarketing}
            listItems={[
              "Introducing Sorayia.com's Educational Chatbots",
              "Overview of Sorayia.com's role in transforming traditional learning and training methods",
              "Highlight the benefits of using chatbots for interactive and personalized learning experiences",
            ]}
          />

          <MarketingCard
            title="Facilitating Access to Educational Resources"
            imageSrc={onlineStore}
            listItems={[
              "Seamless Resource Access",
              "Sorayia.com's chatbots facilitate access to a wide range of educational resources, including textbooks, articles, and multimedia materials",
              "Discuss the advantages of interactive learning in enhancing student engagement and retention",
            ]}
          />
        </div>

        <div className="marketingCardsContainer">
          <MarketingCard
            title="Personalized Responses to Student or Staff Questions"
            imageSrc={solutionsMarketing}
            listItems={[
              "Tailored Support and Assistance",
              "Sorayia.com's chatbots provide personalized responses to student or staff inquiries, addressing their specific needs and concerns",
              "Explore how personalized support improves learning outcomes and boosts confidence",
            ]}
          />
          <MarketingCard
            title="Automating Learning Processes"
            imageSrc={onlineStore}
            listItems={[
              "Interactive Learning Modules",
              "Sorayia.com's chatbots deliver interactive lessons and modules tailored to individual learning styles and preferences",
              "Discuss the advantages of interactive learning in enhancing student engagement and retention",
            ]}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className="buttonYellow buttonMargin">
            Get Started
            <Image src={arrowUp} width={32} height={32} alt="arrow up" />
          </button>
          <button className="buttonGrey buttonMargin">
            Learn More
            <Image src={arrowDown} width={32} height={32} alt="arrow down" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
