import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_tvs2kve", // Replace with your EmailJS service ID
        "template_3i1utnc", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "n92rcp2adr_GDZLRu" // Replace with your EmailJS public key
      );

      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Section: Form + Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Send Us Message
            </h2>
            <p className="text-gray-600 mb-8">
              Don’t hesitate to ask us something. Our customer support team is
              always ready to help you — they will support you 24/7.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Phone"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0088CC] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0074b8] transition-colors"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>

          {/* Right Side - Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-[#0088CC] mb-8">
              CONTACT DETAILS
            </h2>

            <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                REGD.OFFICE ADDRESS:
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-[#0088CC] mt-1">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <p className="text-gray-600">
                    Address: Vinayak Nagar, Sindagi Road Almel,  586202
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-[#0088CC]">
                    <FaPhone size={24} />
                  </div>
                  <p className="text-gray-600">Call Us: +91 97394 61453</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-[#0088CC]">
                    <FaEnvelope size={24} />
                  </div>
                  <p className="text-gray-600">
                    Email Us: info.mahadevienterprises@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Working Hours
              </h3>
              <div className="flex items-start space-x-4">
                <div className="text-[#0088CC]">
                  <FaClock size={24} />
                </div>
                <div>
                  <p className="text-gray-600">
                    Monday - Saturday 9:30 AM to 6:30 PM
                  </p>
                  <p className="text-gray-600">Sunday - Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Map Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.7964157386486!2d76.21655357500295!3d17.082608083753556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc63b68111cd7ab%3A0x3267548d74274283!2sMAHADEVI%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1761626855070!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
