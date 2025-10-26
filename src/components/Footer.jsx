import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1F3A5F] text-[#E6EEF8] pt-16 pb-8 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12 pb-12 border-b border-blue-900/30">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#F08000]">
              Mahadevi Enterprise
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted partner for industrial materials, bearings, valves, and more. Delivering quality and reliability to the sugar and manufacturing sectors.
            </p>
            <div className="pt-4">
              <a href="/request-quote" className="inline-flex items-center text-sm font-medium text-[#F08000] hover:text-[#F08000]/80 transition-colors">
                Request a Quote
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-[#F08000] mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/aboutUs" className="hover:text-[#F08000] transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#F08000] transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  Products & Solutions
                </Link>
              </li>
              <li>
                <Link to="/our-brands" className="hover:text-[#F08000] transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  Our Brands
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-[#F08000] transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F08000] transition-colors inline-flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-[#F08000] mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#F08000] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div className="text-sm leading-relaxed text-blue-100">
                  Vinayak Nagar,<br/>
                  Sindagi Road Almel,<br/>
                  586202
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#F08000] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+91 97394 61453" className="text-sm text-blue-100 hover:text-[#F08000] transition-colors">+91 97394 61453</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#F08000] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info.mahadevienterprises@gmail.com" className="text-sm text-blue-100 hover:text-[#F08000] transition-colors break-all">info.mahadevienterprises@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-[#F08000] mb-4">Connect With Us</h4>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="bg-blue-900/20 p-2 rounded-full hover:bg-[#F08000]/20 transition-colors group">
                <svg className="w-5 h-5 text-blue-100 group-hover:text-[#F08000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.62 2.01 3.62 4.62v4.71z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
                className="bg-blue-900/20 p-2 rounded-full hover:bg-[#F08000]/20 transition-colors group">
                <svg className="w-5 h-5 text-blue-100 group-hover:text-[#F08000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .734.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.592 1.325-1.326v-21.348c0-.734-.592-1.326-1.325-1.326z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" 
                className="bg-blue-900/20 p-2 rounded-full hover:bg-[#F08000]/20 transition-colors group">
                <svg className="w-5 h-5 text-blue-100 group-hover:text-[#F08000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07z"/>
                </svg>
              </a>
            </div>
            <div className="pt-4">
              <p className="text-sm text-blue-100">
                Follow us for updates and news about our latest products and services.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-blue-200/80">
          <p>&copy; {new Date().getFullYear()} Mahadevi Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;