import { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../assets/Mahadevi-logo.jpg';
import productCategories from '../data/productCategories';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const productsMenuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target)) {
        setShowProductsMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md shadow-md">
      {/* White Top Bar */}
      <div className="bg-white flex justify-between items-center px-6 py-3 shadow-sm">
        <div className="flex items-center space-x-2">
          {/* 🏠 Logo links to Home */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12 w-auto transition-transform duration-300 hover:scale-110" />
            <span className="text-xl font-bold text-[#1F3A5F]">MAHADEVI ENTERPRISE</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* 📞 Contact Us button */}
          <Link to="/contact">
            <button className="bg-[#1F3A5F] hover:bg-[#1F3A5F]/80 text-white px-4 py-1 rounded-full font-semibold transition">
              Contact us
            </button>
          </Link>
        </div>
      </div>

      {/* Blue Navigation Bar */}
      <nav className="bg-[#1F3A5F] text-white px-6 py-2 flex justify-between items-center shadow-lg shadow-[#1F3A5F]/20">
        <ul className="hidden md:flex w-full justify-between font-semibold">
          <li className="flex-1 text-center">
            <Link to="/" className="hover:text-white/80 transition">Home</Link>
          </li>
          <li className="flex-1 text-center">
            <Link to="/aboutUs" className="hover:text-white/80 transition">About Us</Link>
          </li>
          <li className="flex-1 text-center relative group" ref={productsMenuRef}>
            <button
              className="hover:text-white/80 transition inline-flex items-center space-x-1"
              onClick={() => setShowProductsMenu(!showProductsMenu)}
            >
              <span>Products & Solutions</span>
              <FaChevronDown className={`transition-transform ${showProductsMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Products Dropdown Menu */}
            {showProductsMenu && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-lg shadow-lg mt-2 py-2 text-[#1F3A5F] z-50">
                {productCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/products?category=${category.id}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-left whitespace-nowrap"
                    onClick={() => setShowProductsMenu(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <Link
                    to="/products"
                    className="block px-4 py-2 hover:bg-gray-100 text-left font-semibold"
                    onClick={() => setShowProductsMenu(false)}
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li className="flex-1 text-center">
            <Link to="/request-quote" className="hover:text-white/80 transition">Quote Form</Link>
          </li>
          <li className="flex-1 text-center">
            <Link to="/success-stories" className="hover:text-white/80 transition">Success Stories</Link>
          </li>
        </ul>

        {/* Mobile menu toggle icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <HiMenu className="text-white text-2xl" />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 text-[#1F3A5F] text-sm space-y-2 font-medium">
          <Link to="/" className="block hover:text-[#1F3A5F]/80" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/aboutUs" className="block hover:text-[#1F3A5F]/80" onClick={() => setMenuOpen(false)}>About us</Link>
          
          {/* Mobile Products Submenu */}
          <div className="border-l-2 border-[#1F3A5F]/10 ml-2 pl-4 py-2">
            <div className="font-semibold mb-2">Products & Solutions:</div>
            {productCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="block hover:text-[#1F3A5F]/80 py-1 pl-2"
                onClick={() => setMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/products"
              className="block hover:text-[#1F3A5F]/80 py-1 pl-2 mt-2 font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              View All Products
            </Link>
          </div>
          
          <Link to="/request-quote" className="block hover:text-[#1F3A5F]/80" onClick={() => setMenuOpen(false)}>Quote Form</Link>
          <Link to="/success-stories" className="block hover:text-[#1F3A5F]/80" onClick={() => setMenuOpen(false)}>Success Stories</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
