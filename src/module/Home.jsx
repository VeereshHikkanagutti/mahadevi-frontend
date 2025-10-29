import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaTruck, FaShieldAlt, FaClock, FaAward } from 'react-icons/fa';
import img1 from '../assets/1.jpg';
import img2 from '../assets/buildfeature.jpg';
import img3 from '../assets/beariings.jpg';
import img4 from '../assets/valves.jpg';
import delivery from '../assets/delivery.svg';
import trust from '../assets/trust.svg';
import quality from '../assets/quality.svg';

const heroImages = [img1, img2, img3, img4];

const mainProducts = [
  { id: 1, name: "Bearings", link: "products?category=bearings", description: "Premium quality industrial bearings for all applications", icon: "🔩" },
  { id: 2, name: "Industrial Valves", link: "products?category=valves", description: "High-performance valves for process control", icon: "⚙️" },
  { id: 3, name: "Gears & Gearboxes", link: "products?category=gears", description: "Precision engineered power transmission solutions", icon: "🔧" },
  { id: 4, name: "Pumps", link: "products?category=pumps", description: "Reliable industrial pumps for every requirement", icon: "💧" },
  { id: 5, name: "Seals & Gaskets", link: "products?category=gaskets", description: "Advanced sealing solutions for industrial applications", icon: "🛡️" },
  { id: 6, name: "Tools & Equipment", link: "products?category=tools", description: "Professional-grade industrial tools and equipment", icon: "🔨" }
];

const stats = [
  { value: "7+", label: "Years of Excellence", icon: FaAward },
  { value: "500+", label: "Happy Clients", icon: FaCheckCircle },
  { value: "10+", label: "Cities Served", icon: FaTruck },
  { value: "100%", label: "Quality Assured", icon: FaShieldAlt }
];

const expertise = [
  { 
    title: "Sugar Industry Solutions", 
    desc: "Specialized equipment and components for sugar mills, ensuring optimal performance and minimal downtime.",
    imgPath: "/src/assets/industry/manufacturing.jpg" 
  },
  { 
    title: "Industrial Components", 
    desc: "Comprehensive range of bearings, valves, and transmission systems for manufacturing excellence.",
    imgPath: "/src/assets/industry/automation.jpg" 
  },
  { 
    title: "Quick Response Service", 
    desc: "24/7 support with rapid delivery ensuring your operations never stop.",
    imgPath: "/src/assets/industry/engineering.jpg" 
  },
  { 
    title: "Quality Assurance", 
    desc: "Rigorous testing and certification ensuring every product meets the highest industry standards.",
    imgPath: "/src/assets/industry/quality.jpg" 
  }
];

const features = [
  { 
    img: delivery, 
    icon: FaTruck,
    title: '24/7 Quick Response', 
    desc: 'Emergency breakdown? We deliver critical components within hours. Your operations never stop with our rapid response system.' 
  },
  { 
    img: trust, 
    icon: FaCheckCircle,
    title: 'Sugar Mill Specialists', 
    desc: 'Deep expertise in sugar industry equipment. We understand your machinery, your challenges, and deliver the right solutions.' 
  },
  { 
    img: quality, 
    icon: FaShieldAlt,
    title: 'Genuine Parts Guaranteed', 
    desc: 'Only authentic products from authorized dealers. Every component comes with manufacturer warranty and quality certification.' 
  }
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(imgInterval);
  }, []);

  return (
    <>
      {/* Hero Section - Improved */}
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Background Images */}
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-30 flex items-center">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#00a8e1]/20 backdrop-blur-sm border border-[#00a8e1]/30 rounded-full px-4 py-2 mb-6">
                <span className="text-[#00a8e1] font-semibold text-sm">🏭 Your Industrial Supply Partner</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                MAHADEVI<br/>
                <span className="text-[#00a8e1]">ENTERPRISE</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white mb-4 font-medium">
                Powering Sugar Mills & Industries
              </p>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Specialized in bearings, valves, gears, and industrial components.
                Delivering quality with 24/7 support for uninterrupted operations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/request-quote" 
                  className="group bg-[#00a8e1] hover:bg-[#0090c7] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                >
                  Get a Quote
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/products" 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all ${
                current === idx ? 'w-12 bg-[#00a8e1]' : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Banner - Quick Impact */}
      <section className="bg-gradient-to-br from-[#1F3A5F] via-[#2a4a6f] to-[#1F3A5F] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="text-3xl text-[#00a8e1]" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
                  <div className="text-sm text-blue-200">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section - Simplified */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">
                Your Trusted Partner in Industrial Success
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since 2018, Mahadevi Enterprise has been serving sugar mills and manufacturing units across Karnataka with premium industrial components and unmatched service.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We understand the critical nature of industrial operations. That's why we maintain extensive inventory, ensure rapid delivery, and provide technical support whenever you need it.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#00a8e1] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1F3A5F] mb-1">Wide Product Range</h4>
                    <p className="text-gray-600 text-sm">Bearings, valves, gears, pumps, and more from trusted brands</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#00a8e1] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1F3A5F] mb-1">Quick Response Time</h4>
                    <p className="text-gray-600 text-sm">24/7 support with rapid delivery across Karnataka</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#00a8e1] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1F3A5F] mb-1">Competitive Pricing</h4>
                    <p className="text-gray-600 text-sm">Best value without compromising on quality</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/aboutUs" 
                className="inline-flex items-center gap-2 bg-[#1F3A5F] hover:bg-[#152840] text-white px-6 py-3 rounded-lg font-semibold transition-all group"
              >
                Learn More About Us
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#f8fafc] to-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#1F3A5F] mb-4">
                Get Started Today
              </h3>
              <p className="text-gray-600 mb-6">
                Need industrial supplies? Contact our team for expert advice and competitive quotes.
              </p>
              
              <div className="space-y-3 mb-6">
                <a href="tel:+919739461453" className="flex items-center gap-3 text-gray-700 hover:text-[#00a8e1] transition-colors">
                  <div className="w-10 h-10 bg-[#00a8e1]/10 rounded-lg flex items-center justify-center">
                    <FaClock className="text-[#00a8e1]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Call Us Now</div>
                    <div className="font-semibold">+91 97394 61453</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/request-quote" 
                  className="bg-[#00a8e1] hover:bg-[#0090c7] text-white px-6 py-3 rounded-lg font-semibold text-center transition-all hover:scale-105"
                >
                  Request a Quote
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-[#1F3A5F] text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products - Enhanced Cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3A5F] mb-4">Our Products & Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive range of industrial components engineered for reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mainProducts.map((p) => (
              <Link 
                key={p.id} 
                to={p.link} 
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl border-2 border-transparent hover:border-[#00a8e1] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-2 group-hover:text-[#00a8e1] transition-colors">
                  {p.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {p.description}
                </p>
                <span className="text-[#00a8e1] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Products
                  <FaArrowRight className="text-sm" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-[#1F3A5F] hover:bg-[#152840] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
            >
              View All Products
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3A5F] mb-4">Why Choose Mahadevi Enterprise?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trusted by industries for our commitment to quality, reliability, and exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div 
                  key={f.title} 
                  className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-[#00a8e1] transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00a8e1] to-[#0090c7] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F3A5F] mb-3 group-hover:text-[#00a8e1] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Expertise - Simplified */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3A5F] mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Specialized solutions tailored for sugar mills and manufacturing industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item) => (
              <div 
                key={item.title} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
              >
                <img 
                  src={item.imgPath} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-y-[-8px] transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1F3A5F] via-[#2a4a6f] to-[#1F3A5F] py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Partner with us for reliable industrial supplies and exceptional service. 
            Contact our team today for expert consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/request-quote" 
              className="bg-[#00a8e1] hover:bg-[#0090c7] text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Request a Quote
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-10 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;