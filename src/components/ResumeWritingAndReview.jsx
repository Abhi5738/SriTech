import React from "react";

const ResumeWritingAndReview = () => {
  return (
    <div className="resume-main">
      <div className="relative -z-50">
        <img
          src="src/assets/resume-heading.jpg"
          className="h-56 md:h-80 w-full object-cover"
          alt="Resume Writing and Review"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className=" md:block text-4xl md:text-6xl font-bold text-white text-center">
            Resume Writing and Review
          </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center about-mission py-8">
        <div className="md:w-1/2 p-4 text-center">
          <h2 className="hidden md:block text-4xl font-semibold mb-4 text-purple-700">
            Resume Writing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Elevate your career prospects with a professionally crafted resume.
            Our expert team specializes in creating tailored resumes that
            effectively showcase your skills, experiences, and achievements. We
            ensure that your resume stands out to hiring managers and aligns
            with industry standards, helping you make a strong impression for
            the job you are targeting.
          </p>
          <div className="flex justify-center mt-6">
            <a
              className="bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 "
              href="/contact"
            >
              Resume Writing
            </a>
          </div>
        </div>
        <div className="md:w-1/3 p-4">
          <h2 className="md:hidden  text-4xl font-semibold mb-4 text-purple-700 text-center">
            Resume Writing
          </h2>
          <img
            src="src/assets/resume.jpg"
            className="w-full h-auto rounded shadow-md"
            alt="Resume Writing"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center about-wwr py-8 bg-gray-100">
        <div className="md:w-1/3 p-4">
          <h2 className="md:hidden text-4xl font-semibold mb-4 text-purple-700 text-center">
            Resume Review
          </h2>
          <img
            src="src/assets/resume-review.jpg"
            className="w-full h-auto rounded shadow-md"
            alt="Resume Review"
          />
        </div>
        <div className="md:w-1/2 p-4 text-center">
          <h2 className="hidden md:block text-4xl font-semibold mb-4 text-purple-700">
            Resume Review
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Receive detailed feedback from our experts to enhance your resume
            impact. Our team meticulously reviews your resume to ensure it meets
            industry standards, refines its content, and emphasizes your most
            relevant skills and accomplishments. We provide actionable insights
            to make your resume more compelling and effective in capturing the
            attention of potential employers.
          </p>
          <div className="flex justify-center mt-6">
            <a
              className="bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
              href="/contact"
            >
              Resume Review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeWritingAndReview;
