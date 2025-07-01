import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Mahadevi-logo.jpg'; // Your logo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md shadow-md">
      {/* White Top Bar */}
      <div className="bg-gray-50 flex justify-between items-center px-6 py-3 shadow-sm">
        <div className="flex items-center space-x-2">
          {/* 🏠 Logo links to Home */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12 w-100 transition-transform duration-300 hover:scale-110" />
            <span className="text-xl font-bold text-blue-800">MAHADEVI ENTERPRISE</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* 📞 Contact Us button */}
          <Link to="/contact">
            <button className="bg-[#F08000] hover:bg-[#c96a00] text-white px-4 py-1 rounded-full font-semibold transition">
              Contact us
            </button>
          </Link>
        </div>
      </div>

      {/* Orange Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#F08000] via-[#ffb347] to-[#F08000] text-white px-6 py-2 flex justify-between items-center">
        <ul className="hidden md:flex w-full justify-between font-semibold">
          <li className="flex-1 text-center">
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                "hover:underline" + (isActive ? " border-b-2 border-white" : "")
              }
            >
              About us
            </NavLink>
          </li>
          <li className="flex-1 text-center">
            <Link to="/products" className="hover:underline">Products & Solutions</Link>
          </li>
          <li className="flex-1 text-center">
            <Link to="/request-quote" className="hover:underline">Quote Form</Link>
          </li>
          <li className="flex-1 text-center">
            <Link to="/our-brands" className="hover:underline">Our Brands</Link>
          </li>
          <li className="flex-1 text-center">
            <Link to="/success-stories" className="hover:underline">Success Stories</Link>
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
        <div className="md:hidden bg-white shadow-md px-6 py-4 text-black text-sm space-y-2 font-medium">
          <Link to="/aboutUs" className="block hover:text-[#F08000]" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link to="/products" className="block hover:text-[#F08000]" onClick={() => setMenuOpen(false)}>Products & Solutions</Link>
          <Link to="/request-quote" className="block hover:text-[#F08000]" onClick={() => setMenuOpen(false)}>Quote Form</Link>
          <Link to="/our-brands" className="block hover:text-[#F08000]" onClick={() => setMenuOpen(false)}>Our Brands</Link>
          <Link to="/success-stories" className="block hover:text-[#F08000]" onClick={() => setMenuOpen(false)}>Success Stories</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
