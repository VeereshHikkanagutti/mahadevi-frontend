import React from "react";
import {
  FaIndustry,
  FaChartLine,
  FaHandshake,
  FaCertificate,
  FaGlobe,
  FaComments,
  FaBullseye,
  FaUsers,
  FaTrophy,
  FaAward,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

function SuccessStories() {
  const milestones = [
    {
      year: "2018",
      title: "Foundation & Vision",
      desc: "Started our operations in Karnataka with a vision to redefine industrial supply reliability and service quality.",
      icon: FaIndustry,
    },
    {
      year: "2020",
      title: "Building Partnerships",
      desc: "Formed long-term collaborations with manufacturers and industrial clients, expanding our reach and trust.",
      icon: FaHandshake,
    },
    {
      year: "2022",
      title: "Expanding Horizons",
      desc: "Served multiple sectors with tailored industrial solutions, backed by a growing distribution network.",
      icon: FaChartLine,
    },
    {
      year: "2023",
      title: "Commitment to Quality",
      desc: "Introduced enhanced quality control systems and client support mechanisms to ensure consistent service excellence.",
      icon: FaCertificate,
    },
    {
      year: "2025",
      title: "Digital Transformation",
      desc: "Launched our digital catalog and smart ordering platform — making industrial sourcing faster and simpler.",
      icon: FaGlobe,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1F3A5F] via-[#2a4a6f] to-[#1F3A5F] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#00a8e1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00a8e1] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Success, Built on Your Trust
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Every milestone we've achieved is a reflection of the strong partnerships
            we've built with our clients. Together, we've turned challenges into
            opportunities, and opportunities into lasting success.
          </p>
        </div>
      </div>

      {/* Intro Narrative Section with Stats */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-6">
              A Journey of Trust and Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              From our humble beginnings in Karnataka to becoming a trusted name in
              industrial supplies, our journey has been guided by a commitment to
              excellence, innovation, and reliability. We continue to grow — not just as a business, but as a partner in
              progress for industries across India.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-gradient-to-br from-[#00a8e1] to-[#0090c7] p-6 rounded-xl text-white text-center shadow-lg hover:scale-105 transition-transform">
              <FaUsers className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div className="bg-gradient-to-br from-[#25d366] to-[#1fb855] p-6 rounded-xl text-white text-center shadow-lg hover:scale-105 transition-transform">
              <FaTrophy className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">7+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-[#F08000] to-[#d67200] p-6 rounded-xl text-white text-center shadow-lg hover:scale-105 transition-transform">
              <FaAward className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">250+</div>
              <div className="text-sm opacity-90">Products Delivered</div>
            </div>
            <div className="bg-gradient-to-br from-[#1F3A5F] to-[#152840] p-6 rounded-xl text-white text-center shadow-lg hover:scale-105 transition-transform">
              <FaShieldAlt className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-90">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Journey Timeline */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1F3A5F] text-center mb-4">
            Our Journey of Excellence
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Every year marks a new chapter in our commitment to serve industries with integrity, innovation, and dedication.
          </p>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800"></div>

            {milestones.map((milestone, index) => {
              const align = index % 2 === 0 ? "right" : "left";
              return (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-20 ${
                    align === "left" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      align === "left" ? "ml-auto mr-10" : "mr-auto ml-10"
                    } bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all`}
                  >
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 ${
                        align === "left" ? "-left-[1.6rem]" : "-right-[1.6rem]"
                      } w-8 h-8 bg-[#00a8e1] rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center`}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>

                    <div className="flex items-center mb-3">
                      <milestone.icon className="text-3xl text-[#00a8e1] mr-3" />
                      <span className="text-[#1F3A5F] font-bold text-2xl">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F3A5F] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative pl-12">
                <div className="absolute left-0 top-0 w-10 h-10 bg-[#00a8e1] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <milestone.icon className="text-white text-lg" />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <span className="text-[#00a8e1] font-bold text-xl block mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-[#1F3A5F] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Industries Trust Us */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-[#1F3A5F] text-center mb-4">
            Why Industries Trust Mahadevi Enterprise
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our success is built on pillars of reliability, quality, and unwavering commitment to client satisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-[#00a8e1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">
                Collaborative Partnerships
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Open, transparent, and responsive communication with our clients
                ensures smooth operations and mutual growth.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-[#00a8e1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBullseye className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">
                Focused Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every message, meeting, and milestone is directed towards one
                goal — delivering consistent, measurable excellence.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-[#00a8e1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">
                Continuous Improvement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We listen, adapt, and evolve through client feedback to
                continuously raise our performance standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-[#1F3A5F] text-center mb-4">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real feedback from real partners who trust us with their industrial supply needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#00a8e1]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00a8e1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#1F3A5F]">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-500">Production Manager, Sugar Mill</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "Mahadevi Enterprise has been our go-to supplier for bearings and valves. Their prompt delivery and quality products have never disappointed us. Highly reliable partner!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#00a8e1]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00a8e1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#1F3A5F]">Suresh Patil</h4>
                  <p className="text-sm text-gray-500">Maintenance Head, Manufacturing Unit</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "Professional service and competitive pricing. They understand our urgent needs and always come through. A trusted name in industrial supplies."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-gradient-to-br from-[#1F3A5F] via-[#2a4a6f] to-[#1F3A5F] text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <FaComments className="text-5xl text-[#00a8e1]" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Your Feedback Helps Us Improve
          </h2>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed">
            We value your voice — share your thoughts, experiences, and ideas to
            help us serve you better every day. Your insights drive our continuous improvement.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#00a8e1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0090c7] transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Share Your Feedback
          </a>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;