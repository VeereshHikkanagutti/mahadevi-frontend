import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaChevronDown, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/Poorvi_logo.jpg';
import productCategories from '../data/productCategories';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* --- Dark Top Bar with Contact Icons --- */}
      <div className="bg-[#2d2d2d] text-white py-1.5">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center gap-1.5">
          <a href="https://wa.me/918123711841" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] hover:bg-[#25d366]/80 p-1.5 rounded transition flex items-center gap-1.5 px-2.5">
            <FaWhatsapp className="text-white text-sm" />
          </a>
          <a href="mailto:poorvitradingcompany2@gmail.com" className="bg-[#ea4335] hover:bg-[#ea4335]/80 p-1.5 rounded transition flex items-center gap-1.5 px-2.5">
            <FaEnvelope className="text-white text-sm" />
          </a>
          <a href="tel:+918123711841" className="bg-[#0077b5] hover:bg-[#0077b5]/80 p-1.5 rounded transition flex items-center gap-1.5 px-2.5">
            <FaPhone className="text-white text-sm" />
          </a>
        </div>
      </div>

      {/* --- Main White Navigation Bar --- */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-25 py-2.5 flex justify-between items-center gap-6 flex-nowrap">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 min-w-fit">
            <img
              src={logo}
              alt="Poorvi Trading Company Logo"
              className="h-10 lg:h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
            <span className="hidden sm:inline text-xs lg:text-sm font-bold text-[#1F3A5F] tracking-wide whitespace-nowrap">
              POORVI TRADING COMPANY
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <ul className="hidden lg:flex items-center gap-4 text-sm font-semibold text-gray-900 flex-1 justify-center flex-nowrap">
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
                <FaChevronDown className="text-xs mt-[1px] transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown on hover */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 hidden group-hover:block z-50">
                <div className="w-56 bg-white text-gray-700 rounded-lg shadow-xl py-2 border border-gray-100">
                  {productCategories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="block px-4 py-2 text-base hover:bg-[#00a8e1]/10 hover:text-[#00a8e1] transition"
                    >
                      {category.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 mt-2 pt-2 px-4">
                    <Link
                      to="/products"
                      className="block text-base font-semibold hover:text-[#00a8e1]"
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
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link to="/request-quote">
              <button className="bg-[#00a8e1] hover:bg-[#0090c7] text-white px-4 py-2 rounded font-semibold text-xs transition shadow-md hover:shadow-lg whitespace-nowrap uppercase">
                GET A QUOTE
              </button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex-shrink-0">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 p-2">
              {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg px-6 py-4 text-gray-700 text-base space-y-3 font-semibold border-t border-gray-200 overflow-y-auto max-h-[calc(100vh-130px)]">
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

          <div className="border-l-2 border-[#00a8e1] ml-2 pl-4 py-2">
            <div className="font-bold mb-2 text-gray-800">Products & Solutions:</div>
            {productCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="block hover:text-[#00a8e1] py-1.5"
                onClick={() => setMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/products"
              className="block hover:text-[#00a8e1] py-2 font-bold mt-2"
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
          
          <Link to="/request-quote" onClick={() => setMenuOpen(false)} className="pt-2 block">
            <button className="w-full bg-[#00a8e1] hover:bg-[#0090c7] text-white px-6 py-2.5 rounded font-semibold text-sm transition uppercase">
              Get A Quote
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;