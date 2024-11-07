import React from "react";

const ContactFormHomePage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-purple-100 to-purple-300 py-16 px-6 lg:px-32 gap-12 items-center pt-20 ">
        <div className="flex-1 text-center lg:text-left max-w-lg mx-auto">
          <h3 className="text-5xl font-bold text-purple-800 mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-8 text-lg">
            We're here to help and answer any questions you may have. Whether
            you need assistance, have a question about our services, or just
            want to share your thoughts, feel free to reach out. Your feedback
            is important to us, and we strive to provide the best possible
            support and service.
          </p>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-xl p-10 max-w-lg mx-auto">
          <h3 className="text-4xl font-bold text-purple-800 mb-6">Email Us</h3>
          <form className="space-y-6 ">
            <div className="pb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Rohan"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-600"
                required=""
              />
            </div>
            <div className="pb-6">
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contact Number
              </label>
              <input
                type="number"
                name="contactNumber"
                id="contactNumber"
                placeholder="+9499975571"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-600"
                required=""
              />
            </div>
            <div className="pb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-600"
                required=""
              />
            </div>
            <div className="pb-6">
              <label className="block text-sm font-medium text-gray-700">
                Reason
              </label>
              <input
                type="text"
                name="reason"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Reason for contact"
              />
            </div>
            <div className="pb-6">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                rows="4"
                placeholder="Your message"
                required=""
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-700 text-white font-medium rounded-lg shadow-md hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFormHomePage;
