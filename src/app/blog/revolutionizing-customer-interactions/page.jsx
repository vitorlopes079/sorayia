import React from "react";
import styles from "../../css/post.module.css";
import Image from "next/image";
import articleImage from "../../images/revolutionizing-article.png";
import QuizForm from "../../_components/QuizForm";
// import SaveArticle from "../../_components/saveArticle";
import PublishedDate from "../../_components/PublishedDate";
import MoreArticlesCard from "../../_components/MoreArticlesCard"
import moreBlogsImage1 from "../../images/moreBlogs1.png";
import moreBlogsImage2 from "../../images/moreBlogs2.png";
import moreBlogsImage3 from "../../images/moreBlogs3.png";
import benefits from "../../images/graphic.png";

const page = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumbContainer}>
        <ul className={styles.breadcrumb}>
          <li className="breadcrumb-item">Blog</li>
          <li> &gt; </li>
          <li className="breadcrumb-item active">Article Page</li>
        </ul>
      </nav>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Revolutionizing Customer Interactions: The Power of Bespoke Chatbots
        </h1>
        <p className={styles.subTitle}>
          In today's fast-paced digital landscape, businesses are constantly
          seeking innovative ways to engage with their customers and streamline
          operations. Enter the era of bespoke chatbots - dynamic virtual
        </p>
        <div className={styles.horizontalLine}></div>
      </div>

      <div>
        <Image src={articleImage} width={950} height={228} />
      </div>

      <div className={styles.textContainer}>
        <p className={styles.text}>
          <span className={styles.highlightText}>Introduction: </span>
          The Rise of Bespoke Chatbots Gone are the days of generic customer
          interactions. With the advent of bespoke chatbots, businesses now have
          the power to deliver personalized experiences that resonate with their
          audience. These virtual assistants are not only revolutionizing
          customer service but also paving the way for enhanced lead generation
          and streamlined operations.
        </p>

        <p className={styles.text}>
          <span className={styles.highlightText}>
            Understanding the Impact:{" "}
          </span>
          Imagine a small local business effortlessly managing customer
          inquiries, an e-commerce giant seamlessly guiding shoppers through the
          purchasing process, or an emerging tech enterprise engaging prospects
          with targeted messaging - all thanks to bespoke chatbots. The impact
          is undeniable, with businesses witnessing increased efficiency, higher
          customer satisfaction, and improved conversion rates.
        </p>

        <div className={styles.formContainer}>
          <QuizForm
            title={"Are you already using a customer chatbot?"}
            options={["Yes", "No"]}
          />
        </div>
        <div className={styles.horizontalLine}></div>

        <p className={styles.text}>
          <span className={styles.highlightText}>
            Empowering Businesses Across Industries
          </span>
        </p>

        <p className={styles.text}>
          From small startups to established enterprises, bespoke chatbots are
          transforming the way businesses interact with their customers. In the
          e-commerce sector, chatbots are redefining the online shopping
          experience, providing personalized recommendations and assistance at
          every step of the buyer's journey. In the healthcare industry,
          chatbots are streamlining appointment scheduling and patient
          inquiries, improving accessibility and efficiency. And in the
          education sector, chatbots are revolutionizing online learning,
          providing students with personalized support and guidance.
        </p>

        <p className={styles.text}>
          <span className={styles.highlightText}>The Future is Now</span>
        </p>

        <p className={styles.text}>
          As we look to the future, one thing is clear - the era of bespoke
          chatbots is here to stay. Businesses that embrace this technology
          stand to gain a significant competitive advantage, as they can deliver
          exceptional customer experiences while optimizing their operations. By
          leveraging the power of chatbots, businesses can unlock new
          opportunities for growth and innovation in an increasingly digital
          world.
        </p>

        <div className={styles.imageContainer}>
          <Image src={benefits} width={616} height={455} />
        </div>

        <p className={styles.text}>
          <span className={styles.highlightText}>
            Conclusion: Embrace the Future
          </span>
        </p>

        <p className={styles.text}>
          In conclusion, bespoke chatbots are reshaping the way businesses
          interact with their customers, offering personalized experiences that
          drive engagement and loyalty. Whether you're a small local business or
          a global enterprise, integrating chatbots into your operations can
          lead to tangible benefits and long-term success. Embrace the future of
          customer interactions with bespoke chatbots and stay ahead of the
          curve in today's dynamic business landscape
        </p>

        <div className={styles.bottomMeta}>
          <SaveArticle />
          <PublishedDate />
        </div>

        <section className={styles.moreBlogsSection}>
          <h1 className="centralizedHeading">More Blogs & Articles</h1>
          <div className={styles.articlesContainer}>
            <MoreArticlesCard
              title={"Maximizing Customer Service Efficiency with Chatbots"}
              image={moreBlogsImage1}
            />
            <MoreArticlesCard
              title={
                "Revolutionizing Customer Interactions: The Power of Bespoke Chatbots"
              }
              image={moreBlogsImage2}
            />
            <MoreArticlesCard
              title={"HR Chatbots Revolution: Transforming Employee Experience"}
              image={moreBlogsImage3}
            />
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.smalHorizontalLine}></div>
            <button className="buttonYellow">View All Articles</button>
            <div className={styles.smalHorizontalLine}></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
