import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a2e4a] via-[#1F3A5F] to-[#152840] text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Mahadevi Enterprise
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00a8e1] to-[#00a8e1]/40 rounded-full"></div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for industrial materials, bearings, valves, and more. Delivering quality and reliability to the sugar and manufacturing sectors.
            </p>
            <Link to="/request-quote">
              <button className="bg-[#00a8e1] hover:bg-[#00a8e1]/90 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Request a Quote
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg text-white mb-2">Quick Links</h4>
              <div className="w-12 h-1 bg-gradient-to-r from-[#00a8e1] to-[#00a8e1]/40 rounded-full"></div>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#00a8e1] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#00a8e1] rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="text-gray-300 hover:text-[#00a8e1] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#00a8e1] rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-[#00a8e1] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#00a8e1] rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Products & Solutions
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-gray-300 hover:text-[#00a8e1] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#00a8e1] rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Quote Form
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-[#00a8e1] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#00a8e1] rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#00a8e1] transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#00a8e1] rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <h4 className="font-bold text-lg text-white mb-2">Get In Touch</h4>
              <div className="w-12 h-1 bg-gradient-to-r from-[#00a8e1] to-[#00a8e1]/40 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <FaMapMarkerAlt className="w-5 h-5 text-[#00a8e1] mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300 leading-relaxed">
                  Vinayak Nagar,<br/>
                  Sindagi Road Almel,<br/>
                  586202
                </div>
              </div>
              <a href="tel:+919739461453" className="flex items-center space-x-3 group hover:translate-x-1 transition-transform">
                <FaPhone className="w-4 h-4 text-[#00a8e1] flex-shrink-0" />
                <span className="text-sm text-gray-300 group-hover:text-[#00a8e1] transition-colors">+91 97394 61453</span>
              </a>
              <a href="mailto:info.mahadevienterprises@gmail.com" className="flex items-start space-x-3 group hover:translate-x-1 transition-transform">
                <FaEnvelope className="w-4 h-4 text-[#00a8e1] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300 group-hover:text-[#00a8e1] transition-colors break-all">info.mahadevienterprises@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="space-y-5">
            <div>
              <h4 className="font-bold text-lg text-white mb-2">Connect With Us</h4>
              <div className="w-12 h-1 bg-gradient-to-r from-[#00a8e1] to-[#00a8e1]/40 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Stay connected for updates, news, and latest offerings.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/919739461453" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-[#25d366] p-3 rounded-lg transition-all duration-300 group hover:scale-110">
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-[#0077b5] p-3 rounded-lg transition-all duration-300 group hover:scale-110">
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-[#1877f2] p-3 rounded-lg transition-all duration-300 group hover:scale-110">
                <FaFacebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-[#e4405f] p-3 rounded-lg transition-all duration-300 group hover:scale-110">
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Mahadevi Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-[#00a8e1] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#00a8e1] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;