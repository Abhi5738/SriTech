import React from "react";

const aboutContent = [
  {
    id: 1,
    title: "Mission",
    imgSrc: "src/assets/mission.jpg",
    text: "Our mission is to empower individuals with the skills and knowledge necessary to excel in their careers. We believe in providing accessible, high-quality education that bridges the gap between learning and real-world application. By fostering a community of learners and professionals, we aim to create an environment where everyone has the opportunity to grow and succeed.",
    reverse: true,
  },
  {
    id: 2,
    title: "Who We Are",
    imgSrc: "src/assets/wwr.jpg",
    text: "At Tutoratech, we have a dedicated team of educators, industry experts, and professionals who are passionate about helping individuals achieve their career goals. With our diverse backgrounds and extensive experience, we have the capability to offer a wide range of courses and services tailored to different learning needs. Our commitment to excellence and belief in the transformative power of education are at the core of everything we do.",
    reverse: false,
  },
  {
    id: 3,
    title: "Vision",
    imgSrc: "src/assets/vision.jpg",
    text: "Our vision is to be a top provider of innovative and accessible education solutions that help people get jobs and grow in their careers. We are dedicated to building a global community of learners who have the skills and knowledge to succeed in a constantly changing world. By using the latest technology and industry insights, we continuously improve our offerings to meet the needs of our students and the demands of the job market.",
    reverse: true,
  },
  {
    id: 4,
    title: "Our Team",
    imgSrc: "src/assets/team.jpg",
    text: "Our team of passionate educators, skilled professionals, and industry experts is dedicated to making a positive impact on our students. We work together to provide a comprehensive learning experience, offering services like expert courses, hands-on internships, resume writing, mock interviews, job referrals, and career guidance. Our goal is to equip students with the skills and opportunities they need to succeed in today’s competitive job market.",
    reverse: false,
  },
];

const AboutUs = () => {
  return (
    <div>
      <div className="relative contactus-image -z-50">
        <img
          src="src/assets/AboutUs.jpg"
          className="h-56 md:h-80 w-full object-cover "
          alt="A collection of courses offered"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
            About Us
          </h1>
        </div>
      </div>

      {aboutContent.map((section) => (
        <div
          key={section.id}
          className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center py-8 ${
            section.id % 2 === 0 ? "bg-gray-100" : ""
          }`}
        >
          <div className="md:w-1/3 p-4 text-center">
            <h2 className="md:hidden text-4xl font-semibold mb-4 text-purple-700">
              {section.title}
            </h2>
            <img src={section.imgSrc} className="w-full h-auto" alt={section.title} />
          </div>
          <div className="md:w-1/2 p-4 text-center">
            <h2 className="hidden md:block text-4xl font-semibold mb-4 text-purple-700">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
