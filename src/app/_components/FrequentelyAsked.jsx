import React from "react";
import Image from "next/image";
import questionsIcon from "../images/questions.png";
import RoundedWidget from "../_components/RoundedWidget";
import styles from "../css/product.module.css";
import Question from "../_components/Question";

const FrequentelyAsked = () => {
  return (
    <div className={styles.frequentelyAskedContainer}>
      <div className={styles.faqContainer}>
        <RoundedWidget text={"FAQ"} />
      </div>
      <h1 className="centralizedSubHeading">Frequently Asked Questions</h1>
      <div className={styles.questionsTextContainer}>
        <p className="centralizedText">
          Hi there, here are some top asked questions about Sorayia.AI
        </p>
        <Image
          src={questionsIcon}
          width={26}
          height={26}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <Question
        question={"How to integrate a chatbot on a website?"}
        answer={[
          "Step 1: Log in to your Sorayia.com account.",
          "Step 2: Navigate to the settings or integration section.",
          "Step 3: Generate the embed code for your chatbot widget.",
          "Step 4: Copy the provided HTML code snippet.",
          "Step 5: Log in to your website's CMS or website builder.",
          "Step 6: Access the HTML code of the webpage where you want to add the chatbot.",
          "Step 7: Paste the copied embed code into the appropriate location in the HTML code.",
          "Step 8: Save and publish your changes.",
        ]}
      />
      <Question
        question={"What does chatbot mean?"}
        answer={
          "A chatbot is a software application that utilizes artificial intelligence (AI) to engage in conversations with users, usually via text or voice input. These interactions can vary from simple exchanges to more intricate tasks, offering users assistance, information, or entertainment."
        }
      />
      <Question
        question={"What is the difference between chat and chatbot?"}
        answer={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
      />
      <Question
        question={"What are the different types of chatbot?"}
        answer={
          "There are two primary types of chatbots: rule-based and AI-powered. Rule-based chatbots follow predetermined instructions, while AI-powered ones, such as those offered by Sorayia.com, employ natural language processing and machine learning for dynamic responses."
        }
      />

      <Question
        question={"What is a widget chatbot?"}
        answer={
          "A widget chatbot, also referred to as a chatbot widget, is a compact interface embedded within websites or applications. It enables users to interact with a chatbot seamlessly without leaving the webpage. Sorayia.com offers advanced widget chatbot solutions for diverse needs."
        }
      />

      <Question
        question={"What is the principle of a chatbot?"}
        answer={
          "The principle of a chatbot is to replicate human-like conversation using AI algorithms. At Sorayia.com, we prioritize creating chatbots that effectively understand user input, process it, and deliver relevant responses, thereby mimicking natural human interaction."
        }
      />
      <Question
        question={"What is the point of a chatbot?"}
        answer={
          "The primary objective of a chatbot is to enhance communication and provide instant assistance to users. Businesses across various sectors, including e-commerce, healthcare, and education, leverage chatbots like those on Sorayia.com to improve customer experience and operational efficiency."
        }
      />
      <Question
        question={"Who uses chatbots?"}
        answer={
          "Chatbots are utilized by a wide range of industries, including e-commerce, customer service, healthcare, banking, and education. Sorayia.com caters to diverse business needs with its innovative chatbot solutions, competing alongside established platforms like Dialogflow and IBM Watson Assistant."
        }
      />
      <Question
        question={"What is the best AI chatbot in 2024?"}
        answer={
          "In 2024, leading AI chatbot platforms like ChatGPT, Dialogflow, and IBM Watson Assistant continue to evolve. At Sorayia.com, we strive to remain at the forefront by offering cutting-edge AI chatbots that deliver exceptional user experiences and drive business growth.."
        }
      />
      <Question
        question={"Is there a ChatGPT widget?"}
        answer={
          "Yes, ChatGPT offers a widget that enables users to embed an AI-powered chatbot directly into websites or applications. However, Sorayia.com stands out with its comprehensive suite of features and personalized support, catering to diverse business requirements."
        }
      />
      <Question
        question={"How to create a chat widget?"}
        answer={
          "Businesses can create a chat widget using platforms like Sorayia.com or by developing custom solutions using HTML, CSS, and JavaScript. Our platform offers customizable chat widgets designed to seamlessly integrate with websites or applications, ensuring a smooth user experience."
        }
      />
      <Question
        question={"How much does a chat widget cost?"}
        answer={
          "The cost of a chat widget varies depending on factors such as complexity and features. While some platforms offer subscription-based plans, custom development costs may vary. Sorayia.com provides flexible pricing options, ensuring affordability without compromising on quality."
        }
      />
      <Question
        question={"How to implement a chatbot?"}
        answer={
          "Implementing a chatbot involves selecting the right platform, designing conversational flows, training the AI model, and deploying the chatbot. Sorayia.com simplifies the process with its user-friendly interface and comprehensive support, ensuring a smooth implementation experience."
        }
      />
      <Question
        question={"What are the disadvantages of chatbot?"}
        answer={
          "Despite their benefits, chatbots may have limitations in understanding complex queries and maintaining conversational context. Sorayia.com addresses these challenges through continuous optimization and integration of advanced AI capabilities."
        }
      />
      <Question
        question={"How to set up a chatbot?"}
        answer={
          "Setting up a chatbot involves configuring settings, designing conversational flows, and integrating with messaging channels or websites. Sorayia.com offers step-by-step guidance and personalized support, ensuring a hassle-free setup process."
        }
      />
      <Question
        question={"How to integrate a chatbot on a website?"}
        answer={
          "Integrating a chatbot on a website can be done using embedding codes provided by platforms like Sorayia.com or through custom integration using web development frameworks. Our platform offers seamless integration options, empowering businesses to enhance user engagement effectively."
        }
      />
      <Question
        question={"How is artificial intelligence used in customer experience?"}
        answer={
          "Artificial intelligence enhances customer experience by personalizing interactions, automating tasks, and analyzing data for insights. Sorayia.com leverages AI to deliver tailored solutions that optimize customer engagement and drive business growth."
        }
      />
      <Question
        question={"Can you use AI for customer service?"}
        answer={
          "Yes, AI is widely used for customer service through chatbots, virtual assistants, and sentiment analysis tools. Sorayia.com provides AI-driven customer service solutions that streamline processes and enhance customer satisfaction."
        }
      />
      <Question
        question={"What is conversational AI for customer support?"}
        answer={
          "Conversational AI for customer support refers to AI-powered systems, such as chatbots and virtual assistants, that engage in natural language conversations to address customer inquiries and provide assistance. Sorayia.com offers advanced conversational AI solutions tailored to diverse business needs."
        }
      />
      <Question
        question={"Is AI taking over customer service?"}
        answer={
          "AI is not taking over customer service but complementing it by automating routine tasks and enhancing efficiency. Sorayia.com ensures a seamless integration of AI-powered solutions, empowering businesses to deliver exceptional customer service experiences."
        }
      />
      <Question
        question={"What is an intelligent chatbot for customer support?"}
        answer={
          "An intelligent chatbot for customer support is equipped with advanced AI capabilities, such as natural language understanding and sentiment analysis, to provide personalized and efficient assistance to customers. Sorayia.com offers intelligent chatbot solutions that optimize customer support processes and drive satisfaction."
        }
      />
      <Question
        question={"How do AI chatbots improve the customer experience?"}
        answer={
          "AI chatbots enhance the customer experience by providing instant assistance, personalized recommendations, and seamless interactions. Sorayia.com focuses on delivering AI chatbots that prioritize user satisfaction and engagement, ensuring a positive customer experience."
        }
      />
      <Question
        question={"What is the best AI for customer service?"}
        answer={
          "The best AI for customer service depends on business requirements and industry-specific needs. Sorayia.com offers AI-driven customer service solutions that are customizable and scalable, catering to diverse business requirements."
        }
      />
      <Question
        question={"How are AI chatbots used in education?"}
        answer={
          "AI chatbots are used in education to provide personalized learning experiences, deliver instant tutoring, and automate administrative tasks. Sorayia.com offers AI chatbot solutions tailored to educational institutions, optimizing learning processes and student engagement."
        }
      />
      <Question
        question={"What is an example of a learning chatbot?"}
        answer={
          "An example of a learning chatbot is Duolingo's chatbot, which uses AI to provide language learning exercises and personalized feedback. Sorayia.com offers similar educational chatbot solutions, empowering learners with interactive and engaging experiences."
        }
      />
    </div>
  );
};

export default FrequentelyAsked;
