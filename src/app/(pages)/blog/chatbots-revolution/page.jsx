"use client"

import React from "react";
import styles from "../../../css/post.module.css";
import Image from "next/image";
import articleImage from "../../../images/chatbot-article.png";
import QuizForm from "../../../_components/QuizForm";
import SaveArticle from "../../../_components/SaveArticle";
import PublishedDate from "../../../_components/PublishedDate";
import MoreArticlesCard from "../../../_components/MoreArticlesCard";
import moreBlogsImage1 from "../../../images/moreBlogs1.png";
import moreBlogsImage2 from "../../../images/moreBlogs2.png";
import moreBlogsImage3 from "../../../images/moreBlogs3.png";
import Breadcrumb from "../../../_components/Breadcrumb";
import Link from "next/link";

const page = () => {
  return (
    <div className="container">
      <Breadcrumb />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          HR Chatbots Revolution: Transforming Employee Experience
        </h1>
        <p className={styles.subTitle}>
          Explore the future of human resources with the integration of HR
          chatbots. In this comprehensive guide, delve into the world of AI
          applied to HR.
        </p>
        <div className={styles.horizontalLine}></div>
      </div>

      <div>
        <Image src={articleImage} width={950} height={228} />
      </div>

      <div className={styles.textContainer}>
        <p className={styles.text}>
          <span className={styles.highlightText}>
            The Basics of HR Chatbots:
          </span>{" "}
          HR chatbots are AI tools designed to simplify communication between
          the company and its employees. They are integrated into internal
          messaging platforms, providing instant answers to employees&apos;
          questions regarding leave, benefits, and more.
        </p>
        <p className={styles.text}>
          <span className={styles.highlightText}>
            Benefits for Employee Experience:
          </span>{" "}
          By integrating HR chatbots, you provide your employees with 24/7
          assistance, thereby enhancing their satisfaction and engagement. These
          personalized chatbots also make it easier to access essential
          information, reducing processing times for requests and improving the
          overall efficiency of the HR service.
        </p>

        <div className={styles.formContainer}>
          <QuizForm
            title={
              "how would you rate your overall experience with the HR chatbot?"
            }
            options={["Excellent", "Good", "Fair", "Poor"]}
          />
        </div>
        <div className={styles.horizontalLine}></div>

        <p className={styles.text}>
          <span className={styles.highlightText}>
            Optimizing HR Operational Efficiency:
          </span>{" "}
          HR chatbots automate administrative tasks such as leave management,
          interview scheduling, and ongoing training. This frees up time for HR
          professionals, who can focus on higher-value tasks such as talent
          development and overall HR strategy. Integration into Regulated and
          Customer Service Sectors: HR chatbots are not
        </p>
        <p className={styles.text}>
          <span className={styles.highlightText}>
            Imited to the enterprise:
          </span>{" "}
          they can also be a valuable asset in highly regulated sectors such as
          healthcare and online banking services. In the healthcare sector, for
          example, chatbots can assist patients in scheduling appointments,
          obtaining medication information, and accessing health resources.
          Similarly, in online banking services, chatbots can guide customers
          through complex processes such as account opening and transaction
          management.
        </p>
        <p className={styles.text}>
          <span className={styles.highlightText}>Conclusion:</span> HR chatbots
          are revolutionizing how companies manage their human resources by
          providing instant, personalized assistance to employees. By
          integrating these AI tools into your HR strategy, you not only improve
          the employee experience but also optimize the operational efficiency
          of your HR service. Get ready for the future of work with HR chatbots.
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
            <Link href={"/blog"}>
              <button className="buttonYellow">View All Articles</button>
            </Link>{" "}
            <div className={styles.smalHorizontalLine}></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
