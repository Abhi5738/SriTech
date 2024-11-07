import React, { useState } from "react";

const FrequentlyAskedQuestions = () => {
  const [boxIsOpen, setBoxIsOpen] = useState(false);
  const handleBoxOpen = () => {
    setBoxIsOpen(!boxIsOpen);
  };

  return (
    <>
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-32">
        <h3 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-6 sm:mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          <div
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 cursor-pointer"
            onClick={handleBoxOpen}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                What services does Tutoratech provide?
              </h4>
              <span className="text-purple-700 text-lg sm:text-xl">
                {boxIsOpen ? "-" : "+"}
              </span>
            </div>
            {boxIsOpen ? (
              <>
                <p className="mt-4 text-gray-600 font-semibold">
                  Visit our Services section to see a full list of what we
                  offer.
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 cursor-pointer"
            onClick={handleBoxOpen}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                How can I contact Tutoratech?
              </h4>
              <span className="text-purple-700 text-lg sm:text-xl">
                {" "}
                {boxIsOpen ? "-" : "+"}
              </span>
            </div>
            {boxIsOpen ? (
              <>
                <p className="mt-4 text-gray-600 font-semibold">
                  You can reach us by sending an email to info_hr@tutoratech.com
                  or by using our 'Contact Us' page.
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 cursor-pointer"
            onClick={handleBoxOpen}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                What is the pricing for your services?
              </h4>
              <span className="text-purple-700 text-lg sm:text-xl">
                {" "}
                {boxIsOpen ? "-" : "+"}
              </span>
            </div>
            {boxIsOpen ? (
              <>
                <p className="mt-4 text-gray-600 font-semibold">
                  Pricing varies depending on the service. Please contact us for
                  more details.
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 cursor-pointer"
            onClick={handleBoxOpen}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                Do you offer 24/7 support?
              </h4>
              <span className="text-purple-700 text-lg sm:text-xl">
                {" "}
                {boxIsOpen ? "-" : "+"}
              </span>
            </div>
            {boxIsOpen ? (
              <>
                <p className="mt-4 text-gray-600 font-semibold">
                  Yes, we provide 24/7 customer support to help with any
                  questions or issues.
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 cursor-pointer"
            onClick={handleBoxOpen}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                How can I get started with Tutoratech?
              </h4>
              <span className="text-purple-700 text-2xl sm:text-2xl">
                {" "}
                {boxIsOpen ? "-" : "+"}
              </span>
            </div>
            {boxIsOpen ? (
              <>
                <p className="mt-4 text-gray-600 font-semibold">
                  You can get started by sending us an email, calling us, or
                  filling out the contact form on our website.
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
