import React from "react";

const brands = [
  {
    name: "SKF",
    logo: "https://seeklogo.com/images/S/skf-logo-6B7B6B6B2B-seeklogo.com.png",
    desc: "World leader in bearings and rotating equipment solutions.",
    website: "https://www.skf.com/",
  },
  {
    name: "Forbes Marshall",
    logo: "https://www.forbesmarshall.com/images/logo.png",
    desc: "Specialists in steam engineering and control instrumentation.",
    website: "https://www.forbesmarshall.com/",
  },
  {
    name: "KSB",
    logo: "https://www.ksb.com/resource/image/14492/landscape_ratio2x1/1200/600/8e8d3e2e4e7e6e7e7e7e7e7e7e7e7e/ksb-logo.png",
    desc: "Global supplier of pumps, valves, and related services.",
    website: "https://www.ksb.com/",
  },
  {
    name: "Bonfiglioli",
    logo: "https://www.bonfiglioli.com/sites/all/themes/bonfiglioli/logo.png",
    desc: "Leading manufacturer of gearmotors, drive systems, and planetary gearboxes.",
    website: "https://www.bonfiglioli.com/",
  },
  {
    name: "Fenner",
    logo: "https://www.fennerdrives.com/images/logo.png",
    desc: "Renowned for power transmission products and solutions.",
    website: "https://www.fennerdrives.com/",
  },
  // Add more brands as needed
];

function OurBrands() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-[#F08000] mb-2">
        Our Brands
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        We partner with the world’s leading brands to deliver quality, reliability,
        and innovation to your industry. Explore our trusted brands below.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {brands.map((brand, idx) => (
          <a
            key={idx}
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition group"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 object-contain mb-3 group-hover:scale-105 transition"
            />
            <h2 className="text-lg font-semibold text-blue-900 mb-1">
              {brand.name}
            </h2>
            <p className="text-gray-600 text-sm text-center">
              {brand.desc}
            </p>
          </a>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-2">
          Looking for a specific brand?
        </h3>
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

export default OurBrands;