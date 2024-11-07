import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExploreSection from "./ExploreSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import Client from "./Client";
import ContactFormHomePage from "./ContactFormHomePage";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <div className=" ">
        <div className="">
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
