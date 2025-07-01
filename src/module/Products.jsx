import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Bearing from "../assets/beariings.jpg";
import Valves from "../assets/valves.jpg";

export const productsData = [
  {
    id: 1,
    name: "BEARING",
    image: Bearing,
    desc: "Durable industrial belt",
    subProducts: [
      { id: "skf", name: "SKF Bearings", desc: "Premium SKF bearings", image: "https://source.unsplash.com/300x200/?skf" },
      { id: "fag", name: "FAG Bearings", desc: "Reliable FAG bearings", image: "https://source.unsplash.com/300x200/?fag" },
      { id: "ntn", name: "NTN Bearings", desc: "High-quality NTN bearings", image: "https://source.unsplash.com/300x200/?ntn" },
    ],
  },
  {
    id: 2,
    name: "VALVES",
    image: Valves,
    desc: "High-temp tubes",
    subProducts: [
      { id: "gate", name: "Gate Valve", desc: "Heavy-duty gate valve", image: "https://source.unsplash.com/300x200/?valve" },
      { id: "globe", name: "Globe Valve", desc: "Reliable globe valve", image: "https://source.unsplash.com/300x200/?valve2" },
    ],
  },
  {
    id: 3,
    name: "Gear Assembly",
    image: "https://source.unsplash.com/300x200/?gear",
    desc: "Precision engineered gear",
    subProducts: [
      { id: "spur", name: "Spur Gear", desc: "Standard spur gear", image: "https://source.unsplash.com/300x200/?spur-gear" },
      { id: "helical", name: "Helical Gear", desc: "Smooth helical gear", image: "https://source.unsplash.com/300x200/?helical-gear" },
    ],
  },
];

const bgImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

function Products() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5) blur(2px)",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-extrabold text-yellow-300 text-center mb-8 drop-shadow-lg tracking-wide">
          Products We Supply
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productsData.map((prod) => (
            <Link key={prod.id} to={`/products/${prod.id}`}>
              <ProductCard product={prod} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;