import React, { useEffect, useRef, useState } from 'react';
import { 
  FaIndustry, 
  FaGlobe, 
  FaHandshake, 
  FaChartLine,
  FaCertificate,
  FaCheckCircle,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaChartBar
} from 'react-icons/fa';
import useCountUp from '../hooks/useCountUp.js';

function AboutUs() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map(ref => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [ref.dataset.section]: true }));
          }
        },
        { threshold: 0.1 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const addToRefs = (el, section) => {
    if (el && !observerRefs.current.includes(el)) {
      el.dataset.section = section;
      observerRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[80vh] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/path/to/your/image.jpg')] bg-cover bg-center"
          style={{ transform: 'translateZ(-1px) scale(2)' }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-scale-in">
              Transforming Industry
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-slide-up">
              Leading the future of industrial solutions with innovation, quality, and sustainable practices
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats with Animation */}
      <div 
        ref={(el) => addToRefs(el, 'stats')}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { endNumber: 5, label: "Years of Excellence", delay: "0", suffix: "+" },
              { endNumber: 1000, label: "Products Supplied", delay: "100", suffix: "+" },
              { endNumber: 50, label: "Brand Partners", delay: "200", suffix: "+" },
              { endNumber: 10, label: "Cities Served", delay: "300", suffix: "+" }
            ].map((stat, index) => {
              const count = useCountUp(
                stat.endNumber,
                2000,
                0
              );
              
              return (
                <div 
                  key={stat.label}
                  className={`text-center transform ${isVisible.stats ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${stat.delay}ms` }}
                >
                  <div className="relative">
                    <div className="text-5xl font-bold text-blue-900 mb-3">
                      <span className="tabular-nums">{isVisible.stats ? count : '0'}</span>
                      <span className="text-[#0F0E47]">{stat.suffix}</span>
                    </div>
                    <div className="h-1 w-12 bg-[#0F0E47] mx-auto"></div>
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider mt-3">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vision for Growth */}
      <div 
        ref={(el) => addToRefs(el, 'vision')}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Vision for Growth</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building a sustainable future through innovation and excellence in industrial solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaLightbulb,
                  title: "Innovation",
                  desc: "Pioneering new solutions and technologies",
                  delay: "0"
                },
                {
                  icon: FaRocket,
                  title: "Expansion",
                  desc: "Growing our presence across new markets",
                  delay: "200"
                },
                {
                  icon: FaChartBar,
                  title: "Sustainability",
                  desc: "Promoting eco-friendly industrial practices",
                  delay: "400"
                }
              ].map((item) => (
                <div 
                  key={item.title}
                  className={`bg-gray-50 p-8 rounded-lg transform ${isVisible.vision ? 'animate-fade-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  <item.icon className="text-4xl text-[#0F0E47] mb-4" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <div className="mt-6">
                    <div className="h-1 bg-gray-200 rounded-full">
                      <div className={`h-full bg-indigo-500 rounded-full ${isVisible.vision ? 'animate-progress' : ''}`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div 
        ref={(el) => addToRefs(el, 'journey')}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Journey of Excellence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every step in our journey has strengthened our commitment to innovation and quality
              </p>
            </div>
            
            {/* Timeline for larger screens */}
            <div className="hidden md:block relative pb-12">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
              {[
                {
                  year: "2018",
                  title: "Foundation",
                  desc: "Established our operations in Karnataka, focusing on industrial supply chain solutions. Started with a small team of experts and a vision to transform the industry.",
                  align: "right",
                  icon: FaIndustry,
                  delay: "0"
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  desc: "Implemented state-of-the-art digital inventory systems and expanded our product portfolio. Introduced online ordering and tracking systems for clients.",
                  align: "left",
                  icon: FaGlobe,
                  delay: "200"
                },
                {
                  year: "2022",
                  title: "Market Expansion",
                  desc: "Extended operations to major industrial hubs across South India. Established partnerships with leading international manufacturers.",
                  align: "right",
                  icon: FaChartLine,
                  delay: "400"
                },
                {
                  year: "2023",
                  title: "Innovation Hub",
                  desc: "Launched our technical consulting division. Achieved ISO certification and expanded our service offerings to include comprehensive industrial solutions.",
                  align: "left",
                  icon: FaLightbulb,
                  delay: "600"
                }
              ].map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center mb-16 ${
                    milestone.align === 'left' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div 
                    className={`w-5/12 ${
                      milestone.align === 'left' ? 'ml-auto mr-8' : 'mr-auto ml-8'
                    } bg-white p-8 rounded-xl shadow-lg transform ${
                      isVisible.journey 
                        ? milestone.align === 'left' 
                          ? 'animate-slide-left' 
                          : 'animate-slide-right' 
                        : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${milestone.delay}ms` }}
                  >
                    <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                      milestone.align === 'left' ? '-left-12' : '-right-12'
                    } w-8 h-8 bg-blue-900 rounded-full border-4 border-white z-10`}></div>
                    <div className="flex items-center mb-4">
                      <milestone.icon className="text-3xl text-[#0F0E47] mr-3" />
                      <span className="text-[#0F0E47] font-bold text-2xl">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline for mobile screens */}
            <div className="md:hidden space-y-8">
              {[
                {
                  year: "2018",
                  title: "Foundation",
                  desc: "Established our operations in Karnataka, focusing on industrial supply chain solutions.",
                  icon: FaIndustry,
                  delay: "0"
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  desc: "Implemented state-of-the-art digital inventory systems and expanded our product portfolio.",
                  icon: FaGlobe,
                  delay: "100"
                },
                {
                  year: "2022",
                  title: "Market Expansion",
                  desc: "Extended operations to major industrial hubs across South India.",
                  icon: FaChartLine,
                  delay: "200"
                },
                {
                  year: "2023",
                  title: "Innovation Hub",
                  desc: "Launched our technical consulting division and achieved ISO certification.",
                  icon: FaLightbulb,
                  delay: "300"
                }
              ].map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`bg-white p-6 rounded-lg shadow-md transform ${
                    isVisible.journey ? 'animate-fade-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${milestone.delay}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <milestone.icon className="text-2xl text-[#0F0E47] mr-3" />
                    <span className="text-[#0F0E47] font-bold text-xl">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview with Mission & Vision */}
      <div 
        ref={(el) => addToRefs(el, 'overview')}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className={`transform ${isVisible.overview ? 'animate-slide-left' : 'opacity-0'}`}>
                <h2 className="text-4xl font-bold text-blue-900 mb-8">
                  Leading the Way in Industrial Excellence
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6">
                    Mahadevi Enterprise stands at the forefront of industrial innovation, delivering cutting-edge solutions that power the manufacturing sector. As a trusted partner to industries across India, we combine technical expertise with a deep understanding of market needs.
                  </p>
                  <p>
                    From our headquarters in Karnataka, we've built a nationwide network that ensures reliable delivery of premium industrial components and technical services. Our commitment to quality and innovation drives everything we do.
                  </p>
                </div>
              </div>
              <div className={`space-y-8 transform ${isVisible.overview ? 'animate-slide-right' : 'opacity-0'}`}>
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <FaChartLine className="mr-3" /> Our Vision
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    To be India's most trusted industrial solutions provider, known for quality, innovation, and customer success.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-8 rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <FaHandshake className="mr-3" /> Our Mission
                  </h3>
                  <p className="text-[#0F0E47]/50 leading-relaxed">
                    To revolutionize industrial supply chains through innovation and technical excellence, enabling operational efficiency and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Strengths */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              Our Core Strengths
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaIndustry,
                  title: "Industrial Excellence",
                  desc: "Premium quality components and equipment from trusted global manufacturers."
                },
                {
                  icon: FaGlobe,
                  title: "Global Network",
                  desc: "Strong partnerships with international manufacturers and nationwide distribution."
                },
                {
                  icon: FaUsers,
                  title: "Expert Team",
                  desc: "Highly qualified professionals providing comprehensive technical support."
                },
                {
                  icon: FaShieldAlt,
                  title: "Quality Assurance",
                  desc: "Rigorous quality control ensuring premium-grade products and services."
                },
                {
                  icon: FaHandshake,
                  title: "Customer Focus",
                  desc: "Dedicated support and tailored solutions for every client's needs."
                },
                {
                  icon: FaCheckCircle,
                  title: "Certified Excellence",
                  desc: "ISO 9001:2015 certified operations and quality management systems."
                }
              ].map((strength) => (
                <div 
                  key={strength.title}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <strength.icon className="text-3xl text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{strength.title}</h3>
                  <p className="text-gray-600">{strength.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Quality */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Quality Standards & Certifications
                </h2>
                <p className="text-gray-600 mb-8">
                  Our commitment to excellence is backed by international certifications and rigorous quality control processes.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <FaCertificate className="text-[#0F0E47] text-xl" />
                    <span className="text-gray-600">ISO 9001:2015 Certified Operations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCertificate className="text-[#0F0E47] text-xl" />
                    <span className="text-gray-600">Authorized Distributor for Premium Brands</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCertificate className="text-[#0F0E47] text-xl" />
                    <span className="text-gray-600">Quality Management System Certified</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Quality Control</h4>
                  <p className="text-sm text-gray-600">Rigorous testing and inspection protocols</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Documentation</h4>
                  <p className="text-sm text-gray-600">Detailed quality and compliance records</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Training</h4>
                  <p className="text-sm text-gray-600">Regular staff certification programs</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Compliance</h4>
                  <p className="text-sm text-gray-600">Meeting international standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with us for innovative industrial solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/products"
                className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
