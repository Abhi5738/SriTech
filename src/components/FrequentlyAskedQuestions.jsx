import React, { useState } from "react";

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services does Tutoratech provide?",
      answer: "Visit our Services section to see a full list of what we offer.",
    },
    {
      question: "How can I contact Tutoratech?",
      answer:
        "You can reach us by sending an email to info_hr@tutoratech.com or by using our 'Contact Us' page.",
    },
    {
      question: "What is the pricing for your services?",
      answer:
        "Pricing varies depending on the service. Please contact us for more details.",
    },
    {
      question: "Do you offer 24/7 support?",
      answer:
        "Yes, we provide 24/7 customer support to help with any questions or issues.",
    },
    {
      question: "How can I get started with Tutoratech?",
      answer:
        "You can get started by sending us an email, calling us, or filling out the contact form on our website.",
    },
  ];

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-32">
      <h3 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-6 sm:mb-8 text-center">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 cursor-pointer"
            onClick={() => toggleBox(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                {faq.question}
              </h4>
              <span className="text-purple-700 text-lg sm:text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-600 font-semibold">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
