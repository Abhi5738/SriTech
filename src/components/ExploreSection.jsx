import React from "react";

const ExploreSection = () => {
  return (
    <>
      <main className="main-div">
        <div className="container flex flex-col justify-between p-10 sm:flex-row ">
          <div className="leftContainer flex flex-col justify-center">
            <h1 className="text-3xl md:text-xl xl:text-6xl font-bold text-purple-800 mb-6 leading-tight md:leading-tight xl:leading-snug ">
              Learn, Upgrade, and Upskill to Get Ahead in Your Career
            </h1>
            <p className="text-sm md:text-lg xl:text-xl text-gray-700 leading-relaxed mb-8">
              Explore our comprehensive programs designed to elevate your skills
              and help you excel in the competitive job market.
            </p>
            <span>
              <a
                className="inline-block bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-8 rounded-md shadow-md transition-all duration-300 ease-in-out "
                href="/contact"
              >
                Explore Now
              </a>
            </span>
          </div>
          <div className="rightContainer">
            <img src="src\assets\portfoloio-img.png" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default ExploreSection;
