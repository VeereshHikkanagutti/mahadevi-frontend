import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaChevronDown, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Mahadevi-logo.jpg';
import productCategories from '../data/productCategories';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* --- Dark Top Bar with Contact Icons --- */}
      <div className="bg-[#2d2d2d] text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center gap-2">
          <a href="https://wa.me/919739461453" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] hover:bg-[#25d366]/80 p-1.5 rounded transition flex items-center gap-1.5 px-2.5">
            <FaWhatsapp className="text-white text-sm" />
            <span className="text-xs font-medium">WhatsApp</span>
          </a>
          <a href="mailto:info.mahadevienterprises@gmail.com" className="bg-[#ea4335] hover:bg-[#ea4335]/80 p-1.5 rounded transition flex items-center gap-1.5 px-2.5">
            <FaEnvelope className="text-white text-sm" />
            <span className="text-xs font-medium">Email</span>
          </a>
          <a href="tel:+919739461453" className="bg-[#0077b5] hover:bg-[#0077b5]/80 p-1.5 rounded transition flex items-center gap-1.5 px-2.5">
            <FaPhone className="text-white text-sm" />
            <span className="text-xs font-medium">Call</span>
          </a>
        </div>
      </div>

      {/* --- Main White Navigation Bar --- */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Mahadevi Enterprise Logo"
              className="h-14 w-auto transition-transform duration-300 hover:scale-105"
            />
            <span className="text-xl font-bold text-[#1F3A5F] tracking-wide">
              MAHADEVI ENTERPRISE
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700 uppercase">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-[#00a8e1] transition-colors ${
                    isActive ? 'text-[#00a8e1]' : ''
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  `hover:text-[#00a8e1] transition-colors ${
                    isActive ? 'text-[#00a8e1]' : ''
                  }`
                }
              >
                About Us
              </NavLink>
            </li>

            {/* --- Products & Solutions Dropdown --- */}
            <li className="relative group">
              <button
                onClick={() => navigate('/products')}
                className="inline-flex items-center gap-1 hover:text-[#00a8e1] transition-colors py-2"
              >
                <span>Products & Solutions</span>
                <FaChevronDown className="text-xs mt-[2px] transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown on hover - removed gap with pt-0 */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-0 hidden group-hover:block">
                <div className="w-64 bg-white text-gray-700 rounded-lg shadow-xl py-2 border border-gray-100">
                  {productCategories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="block px-4 py-2.5 text-sm hover:bg-[#00a8e1]/10 hover:text-[#00a8e1] transition"
                    >
                      {category.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 mt-2 pt-2 px-4">
                    <Link
                      to="/products"
                      className="block text-sm font-semibold hover:text-[#00a8e1]"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <NavLink
                to="/request-quote"
                className={({ isActive }) =>
                  `hover:text-[#00a8e1] transition-colors ${
                    isActive ? 'text-[#00a8e1]' : ''
                  }`
                }
              >
                Quote Form
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/success-stories"
                className={({ isActive }) =>
                  `hover:text-[#00a8e1] transition-colors ${
                    isActive ? 'text-[#00a8e1]' : ''
                  }`
                }
              >
                Success Stories
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-[#00a8e1] transition-colors ${
                    isActive ? 'text-[#00a8e1]' : ''
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/request-quote">
              <button className="bg-[#00a8e1] hover:bg-[#00a8e1]/90 text-white px-6 py-2 rounded font-semibold text-sm transition shadow-md hover:shadow-lg uppercase">
                Get A Quote
              </button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
              {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg px-6 py-4 text-gray-700 text-sm space-y-3 font-semibold border-t border-gray-200">
          <Link
            to="/"
            className="block hover:text-[#00a8e1] py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/aboutUs"
            className="block hover:text-[#00a8e1] py-2"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          <div className="border-l-2 border-gray-200 ml-2 pl-4 py-2">
            <div className="font-bold mb-2 text-gray-800">Products & Solutions:</div>
            {productCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="block hover:text-[#00a8e1] py-1.5 pl-2"
                onClick={() => setMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/products"
              className="block hover:text-[#00a8e1] py-1.5 pl-2 mt-2 font-bold"
              onClick={() => setMenuOpen(false)}
            >
              View All Products
            </Link>
          </div>

          <Link
            to="/request-quote"
            className="block hover:text-[#00a8e1] py-2"
            onClick={() => setMenuOpen(false)}
          >
            Quote Form
          </Link>
          <Link
            to="/success-stories"
            className="block hover:text-[#00a8e1] py-2"
            onClick={() => setMenuOpen(false)}
          >
            Success Stories
          </Link>
          <Link
            to="/contact"
            className="block hover:text-[#00a8e1] py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          
          <Link to="/request-quote" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-[#00a8e1] hover:bg-[#00a8e1]/90 text-white px-6 py-2.5 rounded font-semibold text-sm transition mt-2 uppercase">
              Get A Quote
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;