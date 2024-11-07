import React from "react";
import TraningAndInternShipSvg from "../svg/TraningAndInternShipSvg";
import PersonalizedResumeWritingSvg from "../svg/PersonalizedResumeWritingSvg";
import MockInterviewsSvg from "../svg/MockInterviewsSvg";
import ReferralAssistanceSvg from "../svg/ReferralAssistanceSvg";
import CareerGuidanceSvg from "../svg/CareerGuidanceSvg";
import GrowthCommunitySvg from "../svg/GrowthCommunitySvg";
import CapstoneProjectsSvg from "../svg/CapstoneProjectsSvg";
import HackathonsSvg from "../svg/HackathonsSvg";

const cards = [
  {
    svg: <TraningAndInternShipSvg />,
    title: "Training and Internship",
    description:
      "Gain practical experience with tailored training and internships for real-world challenges",
  },
  {
    svg: <PersonalizedResumeWritingSvg />,
    title: "Personalized Resume Writing",
    description:
      "Get a resume that highlights your strengths and aligns with your career goals.",
  },
  {
    svg: <MockInterviewsSvg />,
    title: "Mock Interviews",
    description:
      "Prepare effectively with mock interviews and receive feedback to enhance performance.",
  },
  {
    svg: <ReferralAssistanceSvg />,
    title: "Referral Assistance",
    description:
      "Access our network for referrals to gain a competitive edge in your job search.",
  },
  {
    svg: <CareerGuidanceSvg />,
    title: "Career Guidance",
    description:
      "Receive expert advice to navigate your career path and achieve long-term success.",
  },
  {
    svg: <GrowthCommunitySvg />,
    title: "Growth Community",
    description:
      "Join a community dedicated to personal growth, networking, and collaboration.",
  },
  {
    svg: <CapstoneProjectsSvg />,
    title: "Capstone Projects",
    description:
      "Showcase your skills with real-world projects for a strong portfolio and job applications.",
  },
  {
    svg: <HackathonsSvg />,
    title: "Hackathons",
    description:
      "Challenge yourself in hackathons that foster innovation and collaboration with peers.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="pt-20 pb-7">
          <p className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Us
          </p>
        </div>
        <div className="cards card flex flex-col gap-7 items-center  rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {cards.map((card, index) => {
              return (
                <div key={index}>
                  <div className="bg-white p-7 max-w-xs rounded-xl shadow-[0_6px_6px_-1px_rgba(0,0,0,0.1)] transition-transform transform hover:scale-105 h-full ">
                    <div className="flex justify-center items-center mb-4">
                      {card.svg}
                    </div>
                    <p className="text-xl text-center font-semibold text-purple-700 mb-2">
                      {card.title}
                    </p>
                    <p className="text-gray-600 text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;
