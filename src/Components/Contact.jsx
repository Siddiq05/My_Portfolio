import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Form submitted!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Contact Me</h1>
        <p className="mt-2 text-lg text-gray-500">Let’s get in touch!</p>
      </div>

      <div className="lg:flex lg:space-x-12">
        {/* Form Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Links Section */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center gap-6">
          <p className="text-center text-gray-700 text-lg font-medium">
            You can also reach me via:
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/MohamedSiddiq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 hover:text-gray-900 transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/MohamedSiddiq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-gray-900 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://wa.me/7676199045" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-gray-900 transition duration-300"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.instagram.com/Siddiq_005" // Replace with your Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-700 hover:text-gray-900 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com/mohammed.siddiq.3762584" // Replace with your Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-gray-900 transition duration-300"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
