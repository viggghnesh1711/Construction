import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 rounded-t-3xl">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="text-left md:w-1/2">
            <h2 className="text-3xl sm:text-6xl font-bold mb-2">
              Join Divi Today. <br /> Getting More Done Together.
            </h2>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">

            {/* Phone Number */}
            <div>
              <h3 className="font-semibold text-lg sm:text-2xl mb-1">Phone Number</h3>
              <p className="text-base sm:text-lg">(255) 352-6258</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-semibold text-lg sm:text-2xl mb-1">Email</h3>
              <p className="text-base sm:text-lg">hello@divicowork.com</p>
            </div>

            {/* Social Media */}
            <div>
            <h3 className="font-semibold text-lg sm:text-2xl mb-1">Follow</h3>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebookF size={30} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaYoutube size={30} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaLinkedinIn size={30} />
              </a>
            </div>
          </div>  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
