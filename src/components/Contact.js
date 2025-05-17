"use client"

import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animations: Setup refs and inView for 3 blocks
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [detailsRef, detailsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        toast.success("Your message has been sent successfully!");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Contact" className="px-6 py-14 sm:px-20 sm:pb-32 bg-stone-100 min-h-screen flex flex-col items-center rounded-b-3xl">
      <Toaster />
      <h1 className="text-5xl font-bold mb-10 my-5 text-left sm:text-center text-gray-800">Get in Touch</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 bg-white p-6 sm:p-12 rounded-lg shadow-2xl">

        {/* Left: Form Section */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="md:col-span-1"
        >
          <h2 className="sm:text-3xl text-xl font-semibold mb-3 text-gray-800">Send a Message</h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">We’re here to help—send us your questions or feedback!</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 text-lg transition duration-200 ease-in-out"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </motion.div>

        {/* Middle: Contact Details */}
        <motion.div
          ref={detailsRef}
          initial="hidden"
          animate={detailsInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="md:col-span-1"
        >
          <h2 className="sm:text-3xl text-xl font-semibold mb-1 text-gray-800 mt-10">Contact us</h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">Contact us to discuss your construction needs!</p>
          <ul className="space-y-8">
            <li>
              <h3 className="font-bold text-base sm:text-xl">Call Us</h3>
              <p className="text-lg">9373609566 <span className='font-semibold'>(ENGG)</span></p>
              <p className="text-lg">9373491145</p>
            </li>
            <li>
              <h3 className="font-bold text-base sm:text-xl">Visit Us</h3>
              <p className="text-lg">Karad ,Shinde-Construction</p>
            </li>
            <li>
              <h3 className="font-bold text-base sm:text-xl">Follow us</h3>
              <div className="flex items-center">
                <a
                  href="https://www.instagram.com/shinde_construction_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="text-black hover:text-gray-400 flex items-center"
                >
                  <FaInstagram size={30} className="text-black" />
                  <span className="text-lg ml-2">shinde_construction_</span>
                </a>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Right: Map Section */}
        <motion.div
          ref={mapRef}
          initial="hidden"
          animate={mapInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="md:col-span-1"
        >
          <h2 className="text-lg sm:text-3xl font-semibold mb-6 text-gray-800 mt-10">Our Location</h2>
          <iframe
            className="w-full h-[400px] rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60952.886664884674!2d74.15605511768231!3d17.288730796688633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc182450c753bad%3A0xb3493b19ae7886ca!2sKarad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1736924006669!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
