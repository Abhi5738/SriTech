import React from "react";
import ExploreSection from "./ExploreSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import Client from "./Client";
import ContactFormHomePage from "./ContactFormHomePage";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";


const Home = () => {
  return (
    <>
      <div className="">
        <div className="px-5 sm:px-20">
          <ExploreSection />
        </div>
        <div className="">
          <WhyChooseUsSection />
        </div>
        <div className="">
          <Client />
        </div>
        <div className="">
          <ContactFormHomePage />
        </div>
        <div className="">
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </>
  );
};

export default Home;
