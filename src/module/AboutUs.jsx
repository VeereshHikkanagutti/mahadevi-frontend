import { FaCheckCircle, FaChartLine, FaCogs } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-[#F08000] mb-4 text-center">
        About Mahadevi Enterprise
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Empowering Indian industry with reliable supply chain solutions, advanced materials, and digital process integration.
      </p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Mission Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaCogs className="text-[#F08000] text-3xl mb-2" />
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Our Mission</h2>
          <p className="text-gray-700 text-center">
            To deliver industrial excellence through timely supply, technical expertise, and continuous process innovation—enabling our partners to achieve operational reliability and growth.
          </p>
        </div>
        {/* Values Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaCheckCircle className="text-[#2563eb] text-3xl mb-2" />
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Our Values</h2>
          <ul className="list-disc pl-4 text-gray-700 text-left">
            <li>Integrity and transparency in every transaction</li>
            <li>Continuous improvement through technology</li>
            <li>Building long-term, value-driven partnerships</li>
            <li>Commitment to quality, safety, and compliance</li>
          </ul>
        </div>
        {/* Why Choose Us Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaChartLine className="text-green-600 text-3xl mb-2" />
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Why Industry Leaders Choose Us</h2>
          <ul className="list-disc pl-4 text-gray-700 text-left">
            <li>Integrated supply chain management with digital tools</li>
            <li>Certified products from global brands</li>
            <li>Fast, reliable delivery and responsive support</li>
            <li>Custom solutions for complex industrial needs</li>
          </ul>
        </div>
      </div>

      {/* Growth Timeline */}
      <div className="bg-white rounded-xl shadow p-8 mb-12">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Our Growth Journey</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-[#F08000] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-2">2019</div>
            <span className="text-gray-700 font-medium">Founded</span>
            <span className="text-xs text-gray-400">Started with a vision to modernize industrial supply</span>
          </div>
          <div className="h-12 w-1 bg-gradient-to-b md:bg-gradient-to-r from-[#F08000] to-blue-200 md:h-1 md:w-24 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-200 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-2">2021</div>
            <span className="text-gray-700 font-medium">Digital Expansion</span>
            <span className="text-xs text-gray-400">Adopted ERP, real-time tracking, and digital tools</span>
          </div>
          <div className="h-12 w-1 bg-gradient-to-b md:bg-gradient-to-r from-blue-200 to-green-400 md:h-1 md:w-24 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-2">2024</div>
            <span className="text-gray-700 font-medium">Trusted Partner</span>
            <span className="text-xs text-gray-400">Serving 100+ clients with excellence</span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <h3 className="text-lg font-semibold mb-2">Ready to transform your supply chain?</h3>
        <a
          href="/contact"
          className="inline-block bg-[#F08000] hover:bg-[#c96a00] text-white px-6 py-2 rounded-full font-semibold shadow transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
export default AboutUs;
