import React, { useEffect, useRef, useState } from "react";
import {
  FaIndustry,
  FaHandshake,
  FaChartLine,
  FaCheckCircle,
  FaUsers,
  FaShieldAlt,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

function AboutUs() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [ref.dataset.section]: true }));
          }
        },
        { threshold: 0.2 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const addToRefs = (el, section) => {
    if (el && !observerRefs.current.includes(el)) {
      el.dataset.section = section;
      observerRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div className="relative h-[55vh] bg-gradient-to-br from-[#1F3A5F] via-[#2a4a6f] to-[#1F3A5F] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/path/to/your/image.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Transforming Industry</h1>
          <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Driving excellence through innovation, reliability, and sustainable industrial solutions.
          </p>
        </div>
      </div>

      {/* L-SHAPE ABOUT GRID */}
      <div ref={(el) => addToRefs(el, "about")} className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* LEFT: Image (set fixed height on md+ so right column text aligns to its bottom) */}
            <div className="flex items-start">
              <img
                src="src/images/about-us.jpg" // put your image in public/images/ or adjust path
                alt="About Us"
                className="w-full object-contain md:h-[460px] rounded-md"
              />
            </div>

            {/* RIGHT: Intro block that should end at image bottom (only includes top paragraphs) */}
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                WHAT DOES MAHADEVI ENTERPRISE DO?
              </h2>

              {/* Top intro paragraphs — these will align vertically to the image height */}
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  A Warm Welcome to Mahadevi Enterprise: Industrial Equipment Supply and Business Supply Company located in Gujarat, India.
                </p>

                <p>
                  We are the one-stop solution that features an exclusive range of Industrial Equipment supplies all over India. Our product range is available for all industrial purposes. Mahadevi Enterprise has been serving the industry for more than 15 years, striving to reduce the workload of buyers and establish a One-Stop Industrial Supply Chain in Gujarat, India. We currently offer over 500,000+ SKU’s, including safety products, industrial valves, pipe fittings, lifting materials, hand tools, anchors and fasteners, power tools, industrial belts, and several others.
                </p>

                {/* Optional shorter paragraph here if you want — keep the right column content concise to fit image height on smaller viewports */}
              </div>
            </div>
          </div>

          {/* ===== Remaining content BELOW the image & top-right text (spans full width) ===== */}
          <div className="mt-10 text-lg leading-relaxed text-gray-700">
            <p>
              With our extensive experience, we have gained a strong reputation as a trusted supplier of Industrial Goods across India. Our team of dedicated professionals ensures that every client’s unique requirements are met with smart, efficient, and reliable solutions.
            </p>

            <p className="mt-4">
              We aim to save time in the client’s purchase process by offering the best prices in the market and easy returns for business supplies with manufacturing defects. We understand the urgency and service required by B2B clients, customizing our industrial supply range to fit their specific needs. Our commitment is to serve you with personalized services, flexible payment options, and prompt delivery to your doorstep.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8">Business Supplies offered by Mahadevi Enterprise</h3>

            <p className="mt-4">
              Mahadevi Enterprise provides a comprehensive selection of industrial supplies to OEMs, manufacturing sectors, pharma companies, oil & gas, and MEP contractors. Our product range includes valves, pipes, fittings, flanges, bellows, hoses and tubings, pneumatic and hydraulic components, fasteners, instrumentation, machinery, industrial spares and parts, brushes, rubber molded parts, abrasives, machined parts, adhesives, measuring instruments, safety products, belts, lifting materials, couplings, pulleys, rubber and PVC hoses, plastic components, and cutting tools.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Mahadevi Enterprise</h2>
          <p className="text-blue-100 mb-10 max-w-3xl mx-auto">
            With over 15 years of experience, Mahadevi Enterprise has built a legacy of trust, innovation, and reliability. Here’s what makes us stand apart:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <FaIndustry className="text-4xl mx-auto mb-4 text-yellow-300" />
              <h3 className="font-semibold text-xl mb-2">Industry Expertise</h3>
              <p>Decades of experience delivering specialized industrial solutions across India.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-lg">
              <FaHandshake className="text-4xl mx-auto mb-4 text-yellow-300" />
              <h3 className="font-semibold text-xl mb-2">Trusted Partnerships</h3>
              <p>Long-term collaboration with top brands ensures quality and reliability.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-lg">
              <FaGlobe className="text-4xl mx-auto mb-4 text-yellow-300" />
              <h3 className="font-semibold text-xl mb-2">Nationwide Reach</h3>
              <p>Seamless distribution network ensuring on-time deliveries across India.</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMPANY OVERVIEW - VISION & MISSION */}
      <div ref={(el) => addToRefs(el, "overview")} className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 ${isVisible.overview ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Leading the Way in Industrial Excellence</h2>
            <p className="text-gray-700 text-lg mb-4">
              Mahadevi Enterprise stands at the forefront of industrial innovation, delivering cutting-edge solutions that power the manufacturing sector. As a trusted partner to industries across India, we combine technical expertise with a deep understanding of market needs.
            </p>
            <p className="text-gray-700 text-lg">
              From our headquarters in Karnataka, we've built a nationwide network that ensures reliable delivery of premium industrial components and technical services. Our commitment to quality and innovation drives everything we do.
            </p>
          </div>

          <div className={`space-y-6 transition-all duration-700 ${isVisible.overview ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-2 flex items-center"><FaChartLine className="mr-3" /> Our Vision</h3>
              <p className="text-blue-100">To be India's most trusted industrial solutions provider, known for quality, innovation, and customer success.</p>
            </div>

            <div className="bg-gradient-to-r from-[#384959] to-[#2d3b47] p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-2 flex items-center"><FaHandshake className="mr-3" /> Our Mission</h3>
              <p className="text-white/90">To revolutionize industrial supply chains through innovation and technical excellence, enabling operational efficiency and sustainable growth.</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* CTA */}
      <div className="bg-[#1F3A5F] py-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-lg text-blue-100 mb-8">Partner with Mahadevi Enterprise for innovative industrial solutions that empower your business.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Contact Us</a>
            <a href="/products" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Explore Solutions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
