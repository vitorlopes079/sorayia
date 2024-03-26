import Image from "next/image";
import styles from "../css/homepage.module.css";
import star from "../images/star.png";
import heroscreeshot from "../images/heroscreeshot.png";
import arrowUp from "../images/arrow-up.png";
import arrowDown from "../images/arrow-down.svg";
import avatar from "../images/avatar.png";
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
import testimonyPhoto3 from "../images/testmphoto3.svg";
import quotes from "../images/quotes.svg";
import Elipse from "../_components/Elipse";
import Stack from "../_components/Stack";
import chatbotChatImage from "../images/chatbotConv.svg";
import RoundedWidget from "../_components/RoundedWidget";
import MarketingCard from "../_components/MarketingCard";
import imageCover from "../images/imageCover.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Elipse numberOfEllipses={7} />
      <section className={styles.hero}>
        <RoundedWidget
          text={"Fast & Efficient with AI"}
          star={true}
        />

        <div className={styles.heroHeadingContainer}>
          <h1 className="centralizedHeading">
            Help customer and employees instantly with a personalized
            <span className={styles.firstLine}>&nbsp;AI-driven chatbot</span>
          </h1>
          <p className="centralizedText">
            Your customers and employees deserve more than just a basic chatbot.
            Elevate their experience with comprehensive customer service
            automation, human resource inquiry automation, and an AI-powered
            e-learning guide that efficiently resolves inquiries while
            delivering an unparalleled user experience. Don&apos;t settle for
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
        <div className={styles.heroImageContainer}>
          <div className={styles.heroscreeshotContainer}>
            <Image
              src={heroscreeshot}
              width={869}
              height={621}
              alt="Dashboard Screenshot"
              className={styles.heroImage}
            />
            <div className={`gradientCover ${styles.gradientCoverHero}`}></div>
          </div>

          <div className={styles.heroImageCoverContainer}>
            <Image
              src={imageCover}
              width={273}
              height={345}
              alt="Ai-chat screenchot"
            />
          </div>
        </div>
      </section>

      <section className={styles.avatarSection}>
        <div className={styles.avatarTopDiv}>
          <div className={styles.avatarSectionTextContainer}>
            <RoundedWidget text={"Your 3D Avatar"} />

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
                <p>I&apos;m your virtual 3D avatar</p>
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
        <RoundedWidget text={"AI customer service agent"} />

        <div className={styles.guideSectionContent}>
          <div className={styles.guideSectionText}>
            <h1 className="leftHeading">
              The virtual guide who help you to{" "}
              <span className="yellowSpan">growing business</span>
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
              <Image src={arrowUp} width={32} height={32} alt="arrow up" />
            </button>
          </div>
          <div className={styles.guideImageContainer}>
            <Image
              src={screenshot}
              width={628}
              height={497}
              alt="Descriptive Alt Text"
            />
            <div className="gradientCover"></div>
            <div className={styles.blurContainer}></div>
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
          />
        </div>
      </section>

      <section className={styles.guideSection}>
        <RoundedWidget text={"AI Human Ressource Agent"} />

        <div className={styles.guideSectionContent}>
          <div className={styles.guideImageContainer}>
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
        <div className="marketingCardsContainer">
          <MarketingCard
            title="Employee Assistance"
            imageSrc={cahier}
            listItems={[
              "Resolve employees&apos; problems",
              "Send links, educational content, documents and help center articles",
              "Transfer to live HR agents",
            ]}
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
          />
        </div>
      </section>

      <section className={styles.guideSection}>
        <RoundedWidget text={"AI Virtual Tutor"} />

        <div className={styles.guideSectionContent}>
          <div className={styles.guideSectionText}>
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
              <Image src={arrowUp} width={32} height={32} alt="arrow up" />
            </button>
          </div>
          <div className={styles.guideImageContainer}>
            <Image
              src={screenshot3}
              alt="descriptive image"
              width={674}
              height={488}
            />
            <div className="gradientCover"></div>
            <div className={styles.blurContainer}></div>
          </div>
        </div>

        <div>
          <h1 className="centralizedSubHeading">
            Instruct and address students&apos; inquiries to{" "}
            <span className="yellowSpan">Enhance Their Knowledge</span>
          </h1>
          <p className="centralizedText">
            Improve the management of student requests and enhance their
            learning through the effective use <br />
            of reusable data to develop effective learning strategies.
          </p>
        </div>
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
          />

          <MarketingCard
            title="Personalize Learning"
            imageSrc={personalize}
            listItems={[
              "Educate about courses related to the learning",
              "Provides answers adapted to learning levels",
              "Launch AI bots on student portal to boost usage",
            ]}
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
          />
        </div>
      </section>

      <section className={styles.testimonalSection}>
        <Stack />

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
                support costs. It&apos;s like having an extra team member
                without the overhead.
              </p>
            </div>
          </div>

          <div
            className={`${styles.testimonyContainer} ${styles.testimonyContainerCenter} `}
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
                Whether they&apos;re seeking product information,
                troubleshooting, or just saying hello, the chatbot is there to
                assist.
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
                The chatbot&apos;s ability to understand and respond to user
                input using NLP is impressive. It feels like having a real
                conversation with a knowledgeable assistant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
