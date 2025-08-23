import { FaCheckCircle, FaChartLine, FaCogs } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-[#1F3A5F] mb-4 text-center">
        About Mahadevi Enterprise
      </h1>
  <p className="text-lg text-[#6B7280] mb-10 text-center">
        Empowering Indian industry with reliable supply chain solutions, advanced materials, and digital process integration.
      </p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Mission Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaCogs className="text-[#1F3A5F] text-3xl mb-2" />
          <h2 className="text-xl font-semibold text-[#1F3A5F] mb-2">Our Mission</h2>
          <p className="text-[#6B7280] text-center">
            To deliver industrial excellence through timely supply, technical expertise, and continuous process innovation—enabling our partners to achieve operational reliability and growth.
          </p>
        </div>
        {/* Values Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaCheckCircle className="text-[#F08000] text-3xl mb-2" />
          <h2 className="text-xl font-semibold text-[#1F3A5F] mb-2">Our Values</h2>
          <ul className="list-disc pl-4 text-[#6B7280] text-left">
            <li>Integrity and transparency in every transaction</li>
            <li>Continuous improvement through technology</li>
            <li>Building long-term, value-driven partnerships</li>
            <li>Commitment to quality, safety, and compliance</li>
          </ul>
        </div>
        {/* Why Choose Us Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <FaChartLine className="text-[#1F3A5F] text-3xl mb-2" />
          <h2 className="text-xl font-semibold text-[#1F3A5F] mb-2">Why Industry Leaders Choose Us</h2>
          <ul className="list-disc pl-4 text-[#6B7280] text-left">
            <li>Integrated supply chain management with digital tools</li>
            <li>Certified products from global brands</li>
            <li>Fast, reliable delivery and responsive support</li>
            <li>Custom solutions for complex industrial needs</li>
          </ul>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center mt-8">
        <h3 className="text-lg font-semibold mb-2">Ready to transform your supply chain?</h3>
        <a
          href="/contact"
          className="inline-block bg-[#1F3A5F] hover:bg-[#16305a] text-white px-6 py-2 rounded-full font-semibold shadow transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
export default AboutUs;
