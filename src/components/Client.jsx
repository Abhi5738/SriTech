import React from "react";

const cards = [
  {
    heading: "Ankit Kumar",
    title: "Senior Backend Developer, TCS",
    description:
      "I am very thankful to the TutoraTech platform for providing me with an 8-week internship, during which I learned Node.js and its applications. This experience significantly helped me in successfully switching my job.",
  },
  {
    heading: "Krisan Kumar",
    title: "Senior Backend Developer, TCS",
    description:
      "I am very thankful to the TutoraTech platform for providing me with an 8-week internship, during which I learned Node.js and its applications. This experience significantly helped me in successfully switching my job.",
  },
  {
    heading: "Mahesh Kumar",
    title: "Senior Backend Developer, TCS",
    description:
      "I am very thankful to the TutoraTech platform for providing me with an 8-week internship, during which I learned Node.js and its applications. This experience significantly helped me in successfully switching my job.",
  },
  {
    heading: "Abhi kumawat",
    title: "Senior Backend Developer, TCS",
    description:
      "I am very thankful to the TutoraTech platform for providing me with an 8-week internship, during which I learned Node.js and its applications. This experience significantly helped me in successfully switching my job.",
  },
  {
    heading: "Raj Kumar",
    title: "Senior Backend Developer, TCS",
    description:
      "I am very thankful to the TutoraTech platform for providing me with an 8-week internship, during which I learned Node.js and its applications. This experience significantly helped me in successfully switching my job.",
  },
  {
    heading: "Harish Kumar",
    title: "Senior Backend Developer, TCS",
    description:
      "I am very thankful to the TutoraTech platform for providing me with an 8-week internship, during which I learned Node.js and its applications. This experience significantly helped me in successfully switching my job.",
  },
];

const Client = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="pt-20 pb-7">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-center text-xl text-gray-600">
            Our success is measured by your success.
          </p>
        </div>
        <div className="cards card flex flex-col gap-7 items-center  rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {cards.map((card, index) => {
              return (
                <div key={index}>
                  <div className="bg-white border hover:border-purple-800 p-7 max-w-xs rounded-xl shadow-[0_6px_6px_-1px_rgba(0,0,0,0.1)] transition-transform transform hover:scale-105 h-full ">
                    <h3 className=" text-[20px] font-semibold text-gray-900">
                      {card.heading}
                    </h3>
                    <p className="text-gray-500 text-[18px] pb-3 ">
                      {card.title}
                    </p>
                    <p className="text-gray-600">{card.description}</p>
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

export default Client;
