import React, { useState, useEffect } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/buildfeature.jpg';
import img3 from '../assets/beariings.jpg';
import img4 from '../assets/valves.jpg';
import { productsData } from './Products';
import { Link } from 'react-router-dom';
import delivery from '../assets/delivery.svg';
import trust from '../assets/trust.svg';
import quality from '../assets/quality.svg';

const mainProducts = [
  {
    id: 1,
    name: "Bearings",
    description: "Premium quality industrial bearings for all applications"
  },
  {
    id: 2,
    name: "Industrial Valves",
    description: "High-performance valves for process control"
  },
  {
    id: 3,
    name: "Gears & Gearboxes",
    description: "Precision engineered power transmission solutions"
  },
  {
    id: 4,
    name: "Pumps",
    description: "Reliable industrial pumps for every requirement"
  },
  {
    id: 5,
    name: "Seals & Gaskets",
    description: "Advanced sealing solutions for industrial applications"
  },
  {
    id: 6,
    name: "Tools & Equipment",
    description: "Professional-grade industrial tools and equipment"
  }
];

function Home() {
  const heroImages = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => {
      clearInterval(imgInterval);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Static Text Layer - Always visible on top */}
        <div className="absolute inset-0 z-30 flex items-center px-4">
          <div className="flex flex-col justify-center items-start h-full md:pl-24 pl-4 max-w-3xl w-full md:w-3/5">
            <span 
              className="block text-[2rem] md:text-[4.5rem] font-bold tracking-tight text-white drop-shadow-lg leading-none mb-4 animate-fade-in" 
              style={{letterSpacing: '-0.02em', fontFamily: 'Plus Jakarta Sans, sans-serif'}}
            >
              MAHADEVI ENTERPRISE
            </span>
            <h1 
              className="text-xl md:text-3xl font-medium text-white mb-6 drop-shadow-xl tracking-tight max-w-2xl animate-slide-in" 
              style={{fontFamily: 'Plus Jakarta Sans, sans-serif', animationDelay: '0.3s'}}
            >
              Pioneering Industrial Excellence through Advanced Supply Chain Solutions & Engineering Innovation
            </h1>
            <blockquote 
              className="text-lg md:text-2xl text-blue-50 font-light mb-8 max-w-2xl leading-relaxed animate-fade-up" 
              style={{fontFamily: 'Plus Jakarta Sans, sans-serif', animationDelay: '0.6s'}}
            >
              "Your Strategic Partner in Industrial Transformation - Delivering Premium-Grade Components, Advanced Engineered Solutions, and Unparalleled Technical Expertise to Drive Your Operational Success and Manufacturing Excellence"
            </blockquote>
          </div>
        </div>
        {/* Background darken overlay - very subtle */}
        <div className="absolute inset-0 z-20 bg-black/30"></div>
        {/* Slideshow Images */}
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* Slideshow Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20 pointer-events-auto select-auto">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${current === idx ? 'bg-[#F08000] scale-125' : 'bg-white/40'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-in {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes scale-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes bounce-in {
            0% { opacity: 0; transform: scale(0.3); }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
          }
          .animate-slide-in {
            animation: slide-in 1s cubic-bezier(0.4,0,0.2,1) both;
          }
          .animate-fade-up {
            animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
          .animate-scale-in {
            animation: scale-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
          .animate-bounce-in {
            animation: bounce-in 1s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}</style>
      </div>
            
      {/* Informational Section (like ABB) */}
      <section className="bg-white py-16 px-4 md:px-6 border-b border-[#E6EEF8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-6 leading-tight">
                Advancing Industrial Excellence Through Strategic Supply Solutions
              </h2>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
                As a premier industrial solutions provider, we deliver comprehensive product portfolios and expert services across manufacturing, processing, and automation sectors. Our commitment to excellence drives innovation and efficiency in every industrial operation we support.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#1F3A5F] to-[#2B4D7A] p-6 rounded-xl text-white animate-scale-in hover:scale-105 transition-transform" style={{animationDelay: '0.1s'}}>
                  <div className="text-3xl font-bold mb-2 animate-bounce-in" style={{animationDelay: '0.3s'}}>5+</div>
                  <div className="text-sm font-medium text-blue-100">Years of Excellence</div>
                </div>
                <div className="bg-gradient-to-br from-[#1F3A5F] to-[#2B4D7A] p-6 rounded-xl text-white animate-scale-in hover:scale-105 transition-transform" style={{animationDelay: '0.2s'}}>
                  <div className="text-3xl font-bold mb-2 animate-bounce-in" style={{animationDelay: '0.4s'}}>100+</div>
                  <div className="text-sm font-medium text-blue-100">Projects Delivered</div>
                </div>
                <div className="bg-gradient-to-br from-[#1F3A5F] to-[#2B4D7A] p-6 rounded-xl text-white animate-scale-in hover:scale-105 transition-transform" style={{animationDelay: '0.3s'}}>
                  <div className="text-3xl font-bold mb-2 animate-bounce-in" style={{animationDelay: '0.5s'}}>10+</div>
                  <div className="text-sm font-medium text-blue-100">Cities Served</div>
                </div>
                <div className="bg-gradient-to-br from-[#1F3A5F] to-[#2B4D7A] p-6 rounded-xl text-white animate-scale-in hover:scale-105 transition-transform" style={{animationDelay: '0.4s'}}>
                  <div className="text-3xl font-bold mb-2 animate-bounce-in" style={{animationDelay: '0.6s'}}>100%</div>
                  <div className="text-sm font-medium text-blue-100">Quality Assured</div>
                </div>
              </div>

              <p className="text-[#1F3A5F] text-lg leading-relaxed mb-8">
                Partner with us to transform your industrial operations. We provide end-to-end solutions that optimize performance, reduce downtime, and drive sustainable growth through superior product quality and expert technical support.
              </p>
            </div>

            {/* Right Actions */}
            <div className="md:col-span-4 flex flex-col justify-start gap-6">
              <div className="bg-[#F8FAFC] p-8 rounded-xl border border-[#E6EEF8]">
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-4">Ready to Get Started?</h3>
                <p className="text-[#4B5563] mb-6">Connect with our experts to discuss your industrial supply needs.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/request-quote" className="inline-block bg-[#F08000] hover:bg-[#E67600] text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition duration-300 text-center">
                    Request a Quote
                  </Link>
                  <Link to="/aboutUs" className="inline-block bg-[#1F3A5F] hover:bg-[#16305a] text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition duration-300 text-center">
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1F3A5F]">
            Our Products
          </h2>
          <p className="text-center text-[#4B5563] max-w-2xl mx-auto mb-10">
            Discover our comprehensive range of industrial products, engineered for reliability and performance in the manufacturing sectors. From precision bearings to robust valves, we supply the essential components that keep your operations running smoothly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {mainProducts.map((prod) => (
              <div
                key={prod.id}
                className="relative group bg-white rounded-xl shadow hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer border border-[#E6EEF8] hover:border-[#1F3A5F] overflow-hidden"
              >
                <div className="relative z-10 transform transition-all duration-300 group-hover:translate-y-[-5px]">
                  <h3 className="text-xl font-bold text-[#1F3A5F] mb-2 group-hover:text-[#F08000] transition-colors">{prod.name}</h3>
                  <p className="text-[#4B5563] text-sm mb-4 group-hover:text-[#1F3A5F] transition-colors">{prod.description}</p>
                  <Link 
                    to={`/products/${prod.id}`}
                    className="text-[#F08000] hover:text-[#E67600] font-semibold inline-flex items-center group"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F]/0 to-[#1F3A5F]/5 group-hover:to-[#1F3A5F]/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to="/products"
              className="inline-block bg-[#1F3A5F] hover:bg-[#16305a] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center"
            >
              View All Products & Solutions
              <span className="ml-2 text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F3A5F] mb-4 animate-fade-in">
            Industry-Leading Expertise
          </h2>
          <p className="text-center text-[#4B5563] max-w-2xl mx-auto mb-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
            Delivering cutting-edge industrial solutions across multiple sectors with advanced technology and proven methodologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Manufacturing Solutions",
                desc: "State-of-the-art manufacturing capabilities ensuring precision and reliability in every component.",
                imgPath: "/src/assets/industry/manufacturing.jpg",
                delay: "0.3s"
              },
              {
                title: "Industrial Automation Systems",
                desc: "Implementing smart automation solutions to enhance operational efficiency and productivity.",
                imgPath: "/src/assets/industry/automation.jpg",
                delay: "0.4s"
              },
              {
                title: "Engineering Excellence",
                desc: "Expert engineering teams delivering innovative solutions for complex industrial challenges.",
                imgPath: "/src/assets/industry/engineering.jpg",
                delay: "0.5s"
              },
              {
                title: "Quality Assurance",
                desc: "Rigorous quality control processes ensuring the highest standards in industrial components.",
                imgPath: "/src/assets/industry/quality.jpg",
                delay: "0.6s"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="group relative overflow-hidden rounded-xl shadow-lg animate-scale-in"
                style={{animationDelay: item.delay}}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.imgPath}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/90 to-transparent opacity-90"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 transform group-hover:translate-y-[-10px] transition-transform duration-500 delay-75">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#1F3A5F] to-[#2B4D7A] p-12 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 animate-scale-in">
              <h2 className="text-3xl font-bold mb-6 text-white bg-clip-text">
                Why Choose Us as Your Strategic Industrial Partner?
              </h2>
              <p className="text-lg text-blue-100 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Empowering Industry Leaders with Cutting-Edge Solutions and Unmatched Expertise
              </p>
              <p className="text-blue-100 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
                With our robust global supply chain network, state-of-the-art quality control systems, and over 5 years of specialized industry expertise, we deliver excellence in every component and service. Our commitment to innovation and reliability makes us the preferred choice for businesses seeking sustainable growth and operational excellence.
              </p>
              <Link
                to="/about-us"
                className="inline-block bg-white hover:bg-[#F08000] hover:text-white text-[#1F3A5F] px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] animate-fade-up"
                style={{animationDelay: '0.6s'}}
              >
                Discover Our Capabilities
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  img: delivery,
                  title: '99% On‑Time Delivery',
                  desc: 'Maintaining exceptional delivery accuracy through advanced logistics management and real-time tracking systems.',
                  delay: '0.2s'
                },
                {
                  img: trust,
                  title: 'Industry-Leading Partnership',
                  desc: 'Building strategic collaborations through transparent communication, technical expertise, and unwavering commitment to client success.',
                  delay: '0.4s'
                },
                {
                  img: quality,
                  title: 'Superior Quality Assurance',
                  desc: 'Implementing rigorous quality control measures and sourcing premium-grade materials from certified global manufacturers.',
                  delay: '0.6s'
                },
              ].map((feat, i) => (
                <div
                  key={feat.title}
                  className="flex items-start gap-6 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-[#E6EEF8] group animate-slide-in transform hover:translate-x-1"
                  style={{animationDelay: feat.delay}}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1F3A5F]/10 flex items-center justify-center group-hover:bg-[#1F3A5F] transition-colors duration-300">
                    <img 
                      src={feat.img} 
                      alt={feat.title} 
                      className="w-8 h-8 object-contain group-hover:brightness-200 transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F3A5F] mb-2 group-hover:text-[#F08000] transition-colors">{feat.title}</h3>
                    <p className="text-[#4B5563] leading-relaxed group-hover:text-[#1F3A5F] transition-colors">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
