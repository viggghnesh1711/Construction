"use client"
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({ name: "", email: "", phone: "", message: "" });
         toast.success("Your message has been sent successfully!")
      } else {
        const data = await response.json();
        alert(data.message)
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Contact" className="px-6 py-14 sm:px-20 sm:pb-32 bg-stone-100 min-h-screen flex flex-col items-center rounded-b-3xl">
      {/* Header Section */}
      <Toaster />
      <h1 className="text-5xl font-bold mb-10 my-5 text-left sm:text-center text-gray-800">Get in Touch</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 bg-white p-6 sm:p-12 rounded-lg shadow-2xl">
        {/* Left: Form Section */}
        <div className="md:col-span-1">
          <h2 className="sm:text-3xl text-xl font-semibold mb-3 text-gray-800">Send a Message</h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim.
          </p>

          {/* Form with state binding */}
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
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 text-lg transition duration-200 ease-in-out"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>

        </div>

        {/* Middle: Contact Details */}
        <div className="md:col-span-1">
          <h2 className="sm:text-3xl text-xl font-semibold mb-1 text-gray-800 mt-10">Contact us</h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            Pellentesque in ipsum id orci porta dapibus.
          </p>
          <ul className="space-y-8">
            <li>
              <h3 className="font-bold text-base sm:text-xl">Call Us</h3>
              <p className="text-lg">(123) 456-7890</p>
            </li>
            <li>
              <h3 className="font-bold text-base sm:text-xl">Visit Us</h3>
              <p className="text-lg">1234 Elm Drive, San Francisco, CA</p>
            </li>
          </ul>
        </div>

        {/* Right: Map Section */}
        <div className="md:col-span-1">
          <h2 className="text-lg sm:text-3xl font-semibold mb-6 text-gray-800 mt-10">Our Location</h2>
          <iframe
            className="w-full h-[400px] rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509482!2d-122.42105908468118!3d37.77492927975854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814e1a731bb7%3A0xb0774d3e63e9488d!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1614699289759!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
