import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="bg-black text-white py-20 rounded-t-3xl"
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="text-left md:w-1/2">
            <h2 className="text-3xl sm:text-6xl font-bold mb-2">
              Join Us Today. <br /> Getting More Done Together.
            </h2>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">

            {/* Phone Number */}
            <div>
              <h3 className="font-semibold text-lg sm:text-2xl mb-1">Phone Number</h3>
              <p className="text-base sm:text-lg">9373609566</p>
              <p className="text-base sm:text-lg">Viraj Shinde <span className='font-semibold'>(ENGG)</span> </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-semibold text-lg sm:text-2xl mb-1">Email</h3>
              <p className="text-base sm:text-lg">virajshinde250002@gmail.com</p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg sm:text-2xl mb-1">Follow</h3>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/shinde_construction_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white hover:text-gray-400">
                  <FaInstagram size={30} />
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
    </motion.footer>
  );
};

export default Footer;
