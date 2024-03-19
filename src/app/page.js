import Image from "next/image";
import styles from "./css/homepage.module.css";
import star from "./images/star.png";
import conversationImage from "./images/conversationImage.png";
import arrowUp from "./images/arrow-up.png";
import arrowDown from "./images/arrow-down.svg";
import avatar from "./images/avatar.png";
import foldIcon from "./images/foldIcon.png";
import aiIcon from "./images/aiIcon.png";
import dbdIcon from "./images/dbIcon.png";
import group from "./images/group.png";
import sales from "./images/sales.png";
import checked from "./images/checked.svg";
import support from "./images/support.png";
import marketing from "./images/marketing.png";
import chat from "./images/chat.png";
import assitance from "./images/assitance.png";
import cahier from "./images/cahier.png";
import performace from "./images/performace.png";
import cards3 from "./images/cards3.png";
import courseAssistance from "./images/courseAssistance.png";
import progresstracking from "./images/progresstracking.png";
import personalize from "./images/personalize.png";
import testimonyPhoto from "./images/testmphoto.svg";
import testimonyPhoto2 from "./images/testmphoto2.svg";
import testimonyPhoto3 from "./images/testmphoto3.svg";
import quotes from "./images/quotes.svg";
import wix from "./images/wix.png";
import square from "./images/square.png";
import w from "./images/w.png";
import shopify from "./images/shopify.png";
import wp from "./images/wp.png";
import Elipse from "./_components/Elipse";

export default function Home() {
  return (
    <div className={styles.container}>
      <Elipse numberOfEllipses={8} />
      <section className={styles.hero}>
        <div className="roundedContainer">
          <p className={styles.roundedText}>
            Something here is Fast & Efficient with AI
          </p>
          <Image src={star} width={18} height={18} alt="star" />
        </div>
        <div className={styles.heroHeadingContainer}>
          <h1 className={styles.heroHeading}>
            Help customer and employees instantly with an personalized
            <span className={styles.firstLine}>&nbsp;AI-driven chatbot</span>
          </h1>
          <p className="centralizedText">
            Your customers and employees deserve more than just a basic chatbot.
            Elevate their experience with comprehensive customer service
            automation, human resource inquiry automation, and an AI-powered
            e-learning guide that efficiently resolves inquiries while
            delivering an unparalleled user experience. Don't settle for
            mediocrity; choose innovation and excellence and invest in the
            future for your business.
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
        <div>
          <Image
            src={conversationImage}
            width={1061}
            height={690}
            alt="Descriptive Alt Text"
          />
        </div>
      </section>

      <section className={styles.avatarSection}>
        <div className={styles.avatarTopDiv}>
          <div className={styles.avatarSectionTextContainer}>
            <div className="roundedContainer">
              <p>Your 3D Avatar </p>
            </div>
            <h2 className="leftHeading">
              Transform yourself into a Virtual Star:
              <span className="yellowSpan"> Create a 3D Avatar</span> that looks
              like you!
            </h2>
            <p className="leftText">
              Utilize our advanced 3D modeling technology to create an
              interactive 3D avatar. Design a virtual influencer that closely
              mirrors your appearance and personality, offering users an
              immersive and relatable experience.
            </p>
          </div>
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
                src={avatar}
                width={322}
                height={475}
                className={styles.avatarImage}
                alt="3D avatar"
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.subheadingContainer}>
            <h2 className="centralizedHeading">
              <span className="yellowSpan">Chat-Bot </span>AI Assist
            </h2>
            <p className="centralizedText">
              Your own generative aI large language model framework designed and{" "}
              <br />
              launched in minutes without coding based on your resources.
            </p>
          </div>

          <div className={styles.cardsContainer}>
            <div className={styles.card}>
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
            </div>
            <div className={styles.card}>
              <div className={styles.figureContainer}>
                <Image
                  src={aiIcon}
                  width={94}
                  height={94}
                  alt="Descriptive Alt Text"
                />
              </div>
              <h4 className={styles.cardTitle}>Right answer in a flash</h4>
              <p className="centralizedText">
                No dependencies on third party providers like Open AI, Google
                Bard or Bing AI.
              </p>
            </div>
            <div className={styles.card}>
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
            </div>
            <div className={styles.card}>
              <div className={styles.figureContainer}>
                <Image src={dbdIcon} width={94} height={94} alt="db icon" />
              </div>
              <h4 className={styles.cardTitle}>Data secured</h4>
              <p className="centralizedText">
                No dependencies on third party providers like Open AI, Google
                Bard or Bing AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.guideSection}>
        <div className="roundedContainer">
          <p>AI customer service agent</p>
        </div>
        <div className={styles.guideSectionContent}>
          <div className={styles.guideSectionText}>
            <h1 className="leftHeading">
              The virtual guide who help you to growing business
            </h1>
            <p className="leftText">
              Sorayia.com guarantees swift response times, resolving customer
              queries within 5 seconds or less by utilizing your existing
              database and conducting website scans for pertinent information.
              With its advanced natural language processing capabilities,
              Sorayia.com engages with customers in a human-like manner,
              delivering accurate and helpful responses." Beyond mere
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
              <Image src={arrowUp} width={32} height={32} alt="arrow up" />
            </button>
          </div>
          <div className={styles.guideImageContainer}>
            <Image
              src={group}
              width={600}
              height={600}
              alt="Descriptive Alt Text"
            />
          </div>
        </div>

        <div>
          <h1 className="centralizedSubHeading">
            <span className="yellowSpan">Seamlessly automate engagement </span>
            across every <br />
            stage of the customer journey
          </h1>
          <p className="centralizedText">
            optimize customer relationships with scalable automation, empowering
            <br />
            personalized attention for top-tier clients.
          </p>
        </div>
        <div className={styles.guideCardsContainer}>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image src={sales} width={60} height={60} alt="sales icon" />
              <h4 className={styles.guideSectionCardTitle}>Sales</h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Qualify and segment leads
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Create personalize sales offer
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Pass leads to CRM
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Transfer qualified chat to sales representatives
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Schedule meetings
              </li>
            </ul>
          </div>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={marketing}
                width={60}
                height={60}
                alt="marketing icon"
              />
              <h4 className={styles.guideSectionCardTitle}>Marketing</h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Initiate conversations proactively with greeting
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Educate about products and services
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Collect leads and pass them to email marketing lists
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Launch AI bots on landing pages to boost conversations
              </li>
            </ul>
          </div>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image src={support} width={60} height={60} alt="support icon" />
              <h4 className={styles.guideSectionCardTitle}>Support</h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Answer common questions with a virtual agent
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Resolve customer's problem
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Create support tickets
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Send links to help center articles or other educational content
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked symbol"
                />
                Transfer to live agents
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.guideSection}>
        <div className="roundedContainer">
          <p>AI Human Ressource Agent</p>
        </div>
        <div className={styles.guideSectionContent}>
          <div className={styles.guideImageContainer}>
            <Image
              src={chat}
              width={600}
              height={600}
              alt="descriptive image"
            />
          </div>
          <div className={styles.guideSectionText}>
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
              Resource strategies. By understanding employees' needs and
              behaviors, Sorayia.com paves the way for revenue-generating
            </p>
            <p className={`leftText ${styles.flex}`}>
              <Image
                src={checked}
                width={15}
                height={15}
                className={styles.checkedIcon}
                alt="ckecked"
              />
              Answer common question with a virtual HR agent
            </p>
            <button className="buttonYellow">
              learn more
              <Image src={arrowUp} width={32} height={32} alt="arrow up" />
            </button>
          </div>
        </div>

        <div>
          <h1 className="centralizedSubHeading">
            Streamline human resource-related inquiries with{" "}
            <span className="yellowSpan">Seamless automation</span>
            at every stage.
          </h1>
          <p className="centralizedText">
            optimizing internal employee requests and external inquiries
            directed <br />
            to the human resources department.
          </p>
        </div>
        <div className={styles.guideCardsContainer}>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image src={cahier} width={60} height={60} alt="cahier" />
              <h4 className={styles.guideSectionCardTitle}>
                Employee Assistance
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Resolve employees' problems
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Send links ,educational content, documents and help center
                articles
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Transfer to live hr agents
              </li>
            </ul>
          </div>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={assitance}
                width={60}
                height={60}
                alt="assistance icon"
              />
              <h4 className={styles.guideSectionCardTitle}>
                Request Management
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Automation of Recruitment Processes
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Request Tracking
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                collects urgent requests from employees
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                launch AI bots on landing pages and employee portal to boost
                usage
              </li>
            </ul>
          </div>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={performace}
                width={60}
                height={60}
                alt="perfomance icon"
              />
              <h4 className={styles.guideSectionCardTitle}>
                Performance Management
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Data Analytics Dashboard
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Data Scraper Integration
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Collection and analysis of comments
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Create support tickets
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.guideSection}>
        <div className="roundedContainer">
          <p>AI Virtual Tutor</p>
        </div>
        <div className={styles.guideSectionContent}>
          <div className={styles.guideSectionText}>
            <h1 className="leftHeading">
              The Virtual Tutor Revolutionizing Student Learning
            </h1>
            <p className="leftText">
              Instructing and addressing students' inquiries is fundamental to
              enhancing their knowledge, facilitated by our chatbot. Our
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
              <Image src={arrowUp} width={32} height={32} alt="arrow up" />
            </button>
          </div>
          <div className={styles.guideImageContainer}>
            <Image
              src={cards3}
              width={565}
              height={495}
              alt="descriptive image"
            />
          </div>
        </div>

        <div>
          <h1 className="centralizedSubHeading">
            Instruct and address students' inquiries to{" "}
            <span className="yellowSpan">Enhance Their Knowledge</span>
          </h1>
          <p className="centralizedText">
            Improve the management of student requests and enhance their
            learning through the effective use <br />
            of reusable data to develop effective learning strategies.
          </p>
        </div>
        <div className={styles.guideCardsContainer}>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={courseAssistance}
                width={60}
                height={60}
                alt="descritive alt"
              />
              <h4 className={styles.guideSectionCardTitle}>
                Course Assistance
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Answer common question about course with a virtual teacher agent
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Resolve students' problems
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Send articles and educational content
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Create support tickets
              </li>
            </ul>
          </div>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={personalize}
                width={60}
                height={60}
                alt="descriptive alt"
              />
              <h4 className={styles.guideSectionCardTitle}>
                personalize learning
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Educate about courses related to the learning
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                provides answers adapted to learning levels
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                launch Ai bots on student portal to boost usage
              </li>
            </ul>
          </div>
          <div className={styles.guideSectionCard}>
            <div className={styles.guideSectionImageContainer}>
              <Image
                src={progresstracking}
                width={60}
                height={60}
                alt="descriptive info"
              />
              <h4 className={styles.guideSectionCardTitle}>
                progress tracking
              </h4>
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="checked"
                />
                Data Analytics Dashboard
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="icon"
                />
                Data Scraper Integration
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="icon"
                />
                Collection and analysis of comments
              </li>
              <li className={styles.listItem}>
                <Image
                  src={checked}
                  width={15}
                  height={15}
                  className={styles.checkedIcon}
                  alt="icon"
                />
                Create support tickets
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.testimonalSection}>
        <div className="roundedContainer">
          <p>Widget Integration</p>
        </div>
        <div className={styles.stackContainer}>
          <h4 className={styles.stackSubHeader}>
            Simplify your work connect sorayia to your tech stack
          </h4>
          <div className={styles.testimonialIconsContainer}>
            <div
              className={`${styles.testimonialIconContainer} ${styles.firstTestimonialIconContainer}`}
            >
              <Image src={wix} width={60} height={60} alt="wix icon" />
            </div>
            <div className={styles.testimonialIconContainer}>
              <Image src={wp} width={60} height={60} alt="wordpress" />
            </div>
            <div className={styles.testimonialIconContainer}>
              <Image src={shopify} width={60} height={60} alt="shopify" />
            </div>
            <div
              className={`${styles.testimonialIconContainer} ${styles.wTestimonialIconContainer}`}
            >
              <Image src={w} width={60} height={46} alt="w" />
            </div>
            <div className={styles.testimonialIconContainer}>
              <Image src={square} width={60} height={60} alt="square space" />
            </div>
          </div>
          <p className={styles.stackSubText}>More than 120+ tools integreted</p>
        </div>

        <div className={styles.testimonialHeadingSection}>
          <h2 className="centralizedHeading">Testimonials</h2>
          <p className="centralizedText">what our customers say about us</p>
        </div>

        <div className={styles.testimoniesContainer}>
          <div className={styles.testimonyContainer}>
            <div className={styles.testimonyTop}>
              <Image
                src={testimonyPhoto}
                height={56}
                width={56}
                alt="descriptive photo"
              />
              <div className={styles.starsAndName}>
                <p className={styles.nameText}>Alexa Horan S.</p>
                <div className={styles.starsContainer}>
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                </div>
              </div>
              <Image src={quotes} height={32} width={32} alt="quotes" />
            </div>
            <div>
              <p className={styles.testimonyText}>
                Implementing the chatbot has significantly reduced our customer
                support costs. It's like having an extra team member without the
                overhead.
              </p>
            </div>
          </div>

          <div
            className={`${styles.testimonyContainer} ${styles.testimonyContainerCenter}`}
          >
            <div className={styles.testimonyTop}>
              <Image
                src={testimonyPhoto2}
                height={56}
                width={56}
                alt="descriptive image"
              />
              <div className={styles.starsAndName}>
                <p className={styles.nameText}>Michael Liu</p>
                <div className={styles.starsContainer}>
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                </div>
              </div>
              <Image src={quotes} height={32} width={32} alt="quotes" />
            </div>
            <div>
              <p className={styles.testimonyText}>
                Our customers appreciate the 24/7 availability of the chatbot.
                Whether they're seeking product information, troubleshooting, or
                just saying hello, the chatbot is there to assist.
              </p>
            </div>
          </div>

          <div className={styles.testimonyContainer}>
            <div className={styles.testimonyTop}>
              <Image
                src={testimonyPhoto3}
                height={56}
                width={56}
                alt="descriptive image"
              />
              <div className={styles.starsAndName}>
                <p className={styles.nameText}>Jeffrey Byrd</p>
                <div className={styles.starsContainer}>
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                  <Image src={star} height={20} width={20} alt="star" />
                </div>
              </div>
              <Image src={quotes} height={32} width={32} alt="quotes" />
            </div>
            <div>
              <p className={styles.testimonyText}>
                The chatbot's ability to understand and respond to user input
                using NLP is impressive. It feels like having a real
                conversation with a knowledgeable assistant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
