import React from "react";
import LinkedinSvg from "../svg/LinkedinSvg";
import InstagramSvg from "../svg/InstagramSvg";
import WhatsappSvg from "../svg/WhatsappSvg";

const Footer = () => {
  return (
    <>
      <footer className="bg-purple-600 text-white py-8 px-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <a className="text-3xl font-bold mb-4 md:mb-0" href="/">
              SriTech
            </a>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
              <li>
                <a
                  class="hover:text-purple-300 text-xl transition"
                  href="/faqs"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  class="hover:text-purple-300 text-xl transition"
                  href="/contact"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  class="hover:text-purple-300 text-xl transition"
                  href="/terms"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  class="hover:text-purple-300 text-xl transition"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li class="flex justify-center space-x-4 mt-4 md:mt-0">
                <a
                  href="https://www.linkedin.com/company/tutoratech"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-purple-300 text-2xl transition"
                >
                  <LinkedinSvg />
                </a>
                <a
                  href="https://www.instagram.com/mahesh_sirswa"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-purple-300 text-2xl transition"
                >
                  <InstagramSvg />
                </a>
                <a
                  href="https://wa.me/+919352363057"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-purple-300 text-2xl transition"
                >
                  <WhatsappSvg />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-xl text-center mb-8">
            <p>
              Providing top-notch resources and support to help you ace your
              interviews and land your dream job.
            </p>
          </div>
          <div className="text-center text-xl border-t border-purple-500 pt-4">
            <p>© 2024 Tutoratech | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
