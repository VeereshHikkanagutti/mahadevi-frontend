import { FaCog } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="relative group bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 rounded-xl p-1 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-white rounded-xl p-4 flex flex-col items-center h-full overflow-hidden">
        {/* Gear icon overlay */}
        <FaCog className="absolute top-3 right-3 text-gray-400 text-2xl opacity-30 group-hover:rotate-180 transition-transform duration-500" />
        {/* Landscape image with spread */}
        <div className="relative w-full flex justify-center mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg border-4 border-gray-300 shadow-lg group-hover:shadow-yellow-400 group-hover:scale-105 transition-all duration-300 bg-gray-100"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 tracking-wide mb-1 group-hover:text-yellow-700 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 text-center mb-2">{product.desc}</p>
        {/* Animated underline */}
        <div className="h-1 w-8 bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-full group-hover:w-16 transition-all duration-300"></div>
      </div>
    </div>
  );
}

export default ProductCard;