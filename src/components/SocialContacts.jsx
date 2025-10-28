import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

function SocialContacts() {
  const whatsappNumber = '+919739461453'; // Replace with your WhatsApp number
  const phoneNumber = '+919739461453'; // Replace with your phone number
  const email = 'info.mahadevienterprises@gmail.com'; // Replace with your email

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition-all transform hover:scale-110 shadow-lg"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Phone */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 p-3 rounded-full text-white hover:bg-blue-600 transition-all transform hover:scale-110 shadow-lg"
        title="Call us"
      >
        <FaPhone size={24} />
      </a>

      {/* Email */}
      <a
        href= "mailto:${email}"
        className="bg-red-500 p-3 rounded-full text-white hover:bg-red-600 transition-all transform hover:scale-110 shadow-lg"
        title="Email us"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
}

export default SocialContacts;