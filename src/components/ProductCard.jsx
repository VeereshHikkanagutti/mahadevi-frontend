import { FaCog } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="relative group bg-gradient-to-br from-[#E6EEF8] via-white to-[#E6EEF8] rounded-xl p-1 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#1F3A5F]/10">
      <div className="bg-white rounded-xl p-4 flex flex-col items-center h-full overflow-hidden">
        {/* Gear icon overlay */}
        <FaCog className="absolute top-3 right-3 text-[#1F3A5F] text-2xl opacity-20 group-hover:rotate-180 transition-transform duration-500" />
        {/* Landscape image with spread */}
        <div className="relative w-full flex justify-center mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg border-4 border-[#E6EEF8] shadow-lg group-hover:shadow-[#F08000]/40 group-hover:scale-105 transition-all duration-300 bg-[#E6EEF8]"
          />
        </div>
        <h3 className="text-xl font-bold text-[#1F3A5F] tracking-wide mb-1 group-hover:text-[#F08000] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-[#6B7280] text-center mb-2">{product.desc}</p>
        {/* Animated underline */}
        <div className="h-1 w-8 bg-gradient-to-r from-[#1F3A5F] to-[#F08000] rounded-full group-hover:w-16 transition-all duration-300"></div>
      </div>
    </div>
  );
}

export default ProductCard;