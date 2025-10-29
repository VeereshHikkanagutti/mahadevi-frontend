import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

function SocialContacts() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  
  const whatsappNumber = '919739461453'; // Without + for WhatsApp link
  const phoneNumber = '+919739461453';
  const email = 'info.mahadevienterprises@gmail.com';

  const contacts = [
    {
      id: 'whatsapp',
      icon: FaWhatsapp,
      href: `https://wa.me/${whatsappNumber}`,
      label: 'WhatsApp',
      bgColor: 'bg-[#25d366]',
      hoverBg: 'hover:bg-[#1fb855]',
      shadowColor: 'shadow-[#25d366]/50',
      glowColor: 'shadow-[#25d366]',
    },
    {
      id: 'phone',
      icon: FaPhone,
      href: `tel:${phoneNumber}`,
      label: 'Call Us',
      bgColor: 'bg-[#00a8e1]',
      hoverBg: 'hover:bg-[#0090c7]',
      shadowColor: 'shadow-[#00a8e1]/50',
      glowColor: 'shadow-[#00a8e1]',
    },
    {
      id: 'email',
      icon: FaEnvelope,
      href: `mailto:${email}`,
      label: 'Email Us',
      bgColor: 'bg-[#ea4335]',
      hoverBg: 'hover:bg-[#d33426]',
      shadowColor: 'shadow-[#ea4335]/50',
      glowColor: 'shadow-[#ea4335]',
    },
  ];

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <div className="flex flex-col gap-4">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          const isHovered = hoveredIcon === contact.id;
          
          return (
            <div key={contact.id} className="relative group">
              {/* Label that appears on hover */}
              <div
                className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                }`}
              >
                <span className="text-gray-800 font-semibold text-sm">{contact.label}</span>
                {/* Arrow pointing to icon */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></div>
              </div>

              {/* Main Icon Button */}
              <a
                href={contact.href}
                target={contact.id === 'whatsapp' ? '_blank' : undefined}
                rel={contact.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => setHoveredIcon(contact.id)}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`
                  relative block ${contact.bgColor} ${contact.hoverBg} 
                  p-4 rounded-full text-white 
                  transition-all duration-300 
                  shadow-lg ${contact.shadowColor}
                  ${isHovered ? `scale-125 shadow-2xl ${contact.glowColor}/80` : 'scale-100'}
                  hover:rotate-12
                  backdrop-blur-sm
                  border-2 border-white/20
                  group
                `}
                title={contact.label}
              >
                {/* Animated ring on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-full border-2 border-white/40
                    transition-all duration-500
                    ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}
                  `}
                ></div>

                {/* Icon with pulse animation on hover */}
                <Icon 
                  size={24} 
                  className={`relative z-10 transition-transform duration-300 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`}
                />

                {/* Glow effect */}
                <div
                  className={`
                    absolute inset-0 rounded-full blur-xl
                    transition-opacity duration-300
                    ${contact.bgColor}
                    ${isHovered ? 'opacity-60' : 'opacity-0'}
                  `}
                ></div>
              </a>

              {/* Subtle pulse animation when not hovered */}
              {!isHovered && (
                <div className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none" 
                     style={{ animationDuration: '3s' }}>
                  <div className={`w-full h-full ${contact.bgColor} rounded-full`}></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Decorative background element */}
      <div className="absolute -inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-3xl backdrop-blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default SocialContacts;