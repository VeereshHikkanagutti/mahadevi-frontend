import React, { useState } from "react";
import { FaStar, FaQuoteRight, FaIndustry, FaChartLine, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const stories = [
  {
    company: "Shree Sugars Ltd.",
    industry: "Sugar Manufacturing",
    logo: "https://img.icons8.com/color/48/000000/factory.png",
    summary: "Reduced downtime by 30% with our rapid supply of critical bearings",
    challenge: "Frequent production delays due to bearing failures and slow replacement process",
    solution: "Implemented just-in-time inventory system with 24-hour delivery guarantee",
    results: [
      "30% reduction in equipment downtime",
      "₹15 lakhs annual maintenance cost savings",
      "Zero production delays in last 6 months"
    ],
    details: "Shree Sugars Ltd. faced frequent breakdowns due to delayed bearing replacements. Our team ensured same-day dispatch and technical support, resulting in a 30% reduction in downtime and improved production efficiency.",
    person: "Mr. Ramesh Kumar",
    position: "Maintenance Head",
    image: "/path-to-image.jpg", // Add actual image path
    rating: 5,
    year: "2023"
  },
  {
    company: "Vijay Engineering Works",
    industry: "Industrial Manufacturing",
    logo: "https://img.icons8.com/color/48/000000/engineering.png",
    summary: "Enabled on-time commissioning of a new plant with custom valves",
    challenge: "Complex requirements for custom valves with tight deadline",
    solution: "Specialized valve design and expedited manufacturing process",
    results: [
      "Project completed 2 weeks ahead of schedule",
      "100% compliance with specifications",
      "20% cost savings through efficient sourcing"
    ],
    details: "Vijay Engineering Works needed custom valves for a new sugar plant. We sourced and delivered the required components ahead of schedule, helping them commission the plant on time.",
    person: "Ms. Priya Desai",
    position: "Project Manager",
    image: "/path-to-image.jpg", // Add actual image path
    rating: 5,
    year: "2023"
  },
  {
    company: "GreenCity Power",
    industry: "Power Generation",
    logo: "https://img.icons8.com/color/48/000000/renewable-energy.png",
    summary: "Improved reliability with quality gear assemblies",
    challenge: "Frequent gear failures causing power generation disruptions",
    solution: "Premium quality gear assemblies with preventive maintenance plan",
    results: [
      "85% reduction in gear failures",
      "40% increase in equipment lifespan",
      "Annual savings of ₹25 lakhs"
    ],
    details: "GreenCity Power was struggling with frequent gear failures. Our high-quality gear assemblies improved reliability and reduced maintenance costs significantly.",
    person: "Mr. Sandeep Singh",
    position: "Operations Lead",
    image: "/path-to-image.jpg", // Add actual image path
    rating: 5,
    year: "2024"
  }
];

const statistics = [
  { number: "24/7", label: "Support Availability" },
  { number: "2000+", label: "Products Available" },
  { number: "30+", label: "Industry Partners" },
  { number: "6hrs", label: "Average Response Time" }
];

function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#1F3A5F] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Success Starts Here
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Learn how we can help transform your industrial operations with our
              innovative solutions and dedicated support
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#F08000] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Success Stories */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1F3A5F] text-center mb-12">
              How We Can Help You Succeed
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {stories.map((story, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={story.logo}
                        alt={story.company}
                        className="w-12 h-12"
                      />
                      <div className="flex">
                        {[...Array(story.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1F3A5F] mb-2">
                      {story.company}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{story.industry}</p>
                    <div className="border-l-4 border-[#F08000] pl-4 mb-4">
                      <p className="text-gray-600 italic">{story.summary}</p>
                    </div>
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="text-[#F08000] hover:text-[#1F3A5F] transition-colors flex items-center text-sm font-medium"
                    >
                      Read Full Story <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                  <div className="bg-gray-50 p-6 border-t">
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-[#1F3A5F]">
                          {story.person}
                        </p>
                        <p className="text-sm text-gray-600">{story.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Overview */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1F3A5F] text-center mb-12">
              Our Commitment to Excellence
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <FaIndustry className="text-4xl text-[#F08000] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-2">
                  Operational Efficiency
                </h3>
                <p className="text-gray-600">
                  Fast response times and efficient solutions for minimal downtime
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <FaChartLine className="text-4xl text-[#F08000] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-2">
                  Cost Optimization
                </h3>
                <p className="text-gray-600">
                  Competitive pricing and efficient sourcing for maximum value
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <FaCheckCircle className="text-4xl text-[#F08000] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-2">
                  Quality First
                </h3>
                <p className="text-gray-600">
                  Rigorous quality control and authentic product sourcing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Story Details */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F3A5F] mb-2">
                    {selectedStory.company}
                  </h3>
                  <p className="text-gray-600">{selectedStory.industry}</p>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#1F3A5F] mb-2">Challenge</h4>
                  <p className="text-gray-600">{selectedStory.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#1F3A5F] mb-2">Our Solution</h4>
                  <p className="text-gray-600">{selectedStory.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#1F3A5F] mb-2">Results</h4>
                  <ul className="space-y-2">
                    {selectedStory.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-6 mt-6">
                  <div className="flex items-center">
                    <FaQuoteRight className="text-[#F08000] text-3xl mr-4" />
                    <div>
                      <p className="text-gray-600 italic mb-2">
                        "{selectedStory.details}"
                      </p>
                      <p className="font-semibold text-[#1F3A5F]">
                        {selectedStory.person}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedStory.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-[#1F3A5F] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Success Together
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with us to optimize your industrial operations and achieve excellence
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-[#1F3A5F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/request-quote"
                className="inline-block bg-[#F08000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#F08000]/90 transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;