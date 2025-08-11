import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#22223b] text-gray-200 pt-10 pb-4 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-[#F08000] mb-2">Mahadevi Enterprise</h3>
          <p className="text-gray-400 text-sm mb-3">
            Your trusted partner for industrial materials, bearings, valves, and more. Delivering quality and reliability to the sugar and manufacturing sectors.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-2 text-[#F08000]">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/aboutUs" className="hover:text-[#F08000]">About Us</Link></li>
            <li><Link to="/products" className="hover:text-[#F08000]">Products & Solutions</Link></li>
            <li><Link to="/request-quote" className="hover:text-[#F08000]">Quote Form</Link></li>
            <li><Link to="/our-brands" className="hover:text-[#F08000]">Our Brands</Link></li>
            <li><Link to="/success-stories" className="hover:text-[#F08000]">Success Stories</Link></li>
            <li><Link to="/contact" className="hover:text-[#F08000]">Contact</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-2 text-[#F08000]">Contact</h4>
          <p className="text-sm">📍 Regisrtered Location : </p>
           <p className="text-sm">    Vinayak Nagar Sindagi Road Almel, 586202 </p>
          <p className="text-sm" > <a href="tel:+91 97394 61453">📞 +91 97394 61453</a>.</p>
          <p className="text-sm"><a href="mailto:info.mahadevienterprises@gmail.com"> ✉️ info.mahadevienterprises@gmail.com </a>.</p>
        </div>
        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-lg mb-2 text-[#F08000]">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F08000]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.62 2.01 3.62 4.62v4.71z"/></svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F08000]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z"/></svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F08000]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.276.06-2.687.334-3.678 1.325-.991.991-1.265 2.402-1.325 3.678-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.06 1.276.334 2.687 1.325 3.678.991.991 2.402 1.265 3.678 1.325 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.276-.06 2.687-.334 3.678-1.325.991-.991 1.265-2.402 1.325-3.678.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.06-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.265-3.678-1.325-1.28-.06-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Mahadevi Enterprise. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;