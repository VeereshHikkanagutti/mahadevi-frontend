import { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
import Bearing from "../assets/beariings.jpg";
import Valves from "../assets/valves.jpg";

export const productsData = [
  {
    id: "skf",
    name: "SKF Bearings",
    category: "Bearings",
    brand: "SKF",
    desc: "Premium SKF bearings for industrial applications",
    image: Bearing,
    popular: true
  },
  {
    id: "fag",
    name: "FAG Bearings",
    category: "Bearings",
    brand: "FAG",
    desc: "Reliable FAG bearings for heavy-duty use",
    image: Bearing,
    featured: true
  },
  {
    id: "ntn",
    name: "NTN Bearings",
    category: "Bearings",
    brand: "NTN",
    desc: "High-quality NTN bearings for precision applications",
    image: Bearing
  },
  {
    id: "gate-valve",
    name: "Gate Valve",
    category: "Valves",
    brand: "Premium",
    desc: "Heavy-duty gate valve for industrial flow control",
    image: Valves,
    featured: true
  },
  {
    id: "globe-valve",
    name: "Globe Valve",
    category: "Valves",
    brand: "Premium",
    desc: "Reliable globe valve for precise flow regulation",
    image: Valves,
    popular: true
  },
  {
    id: "spur-gear",
    name: "Spur Gear",
    category: "Gears",
    brand: "Industrial",
    desc: "Standard spur gear for mechanical power transmission",
    image: "https://source.unsplash.com/300x200/?gear",
    featured: true
  },
  {
    id: "helical-gear",
    name: "Helical Gear",
    category: "Gears",
    brand: "Industrial",
    desc: "Smooth helical gear for quiet operation",
    image: "https://source.unsplash.com/300x200/?gear",
    popular: true
  }
];

const bgImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProducts, setSelectedProducts] = useState({});
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  // Get unique categories
  const categories = ["all", ...new Set(productsData.map(prod => prod.category))];

  // Filter products based on search and category
  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle quantity changes
  const handleQuantityChange = (productId, change) => {
    setSelectedProducts(prev => {
      const currentQty = prev[productId]?.quantity || 0;
      const newQty = Math.max(0, currentQty + change);
      return {
        ...prev,
        [productId]: {
          ...prev[productId],
          quantity: newQty
        }
      };
    });
  };

  // Handle enquiry form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      ...formData,
      selectedProducts: Object.entries(selectedProducts)
        .filter(([_, value]) => value.quantity > 0)
        .map(([id, value]) => ({
          product: productsData.find(p => p.id === id).name,
          quantity: value.quantity
        }))
    });
    // Reset form and selections
    setSelectedProducts({});
    setShowEnquiryForm(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#1F3A5F] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Premium Industrial Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality industrial products from world-renowned manufacturers
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-full p-2 max-w-2xl mx-auto flex items-center">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products by name or category..."
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F3A5F]/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveFilter(category);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-[#1F3A5F] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-[#1F3A5F] mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="px-3 py-1 text-[#1F3A5F] hover:bg-[#1F3A5F]/10 border-r"
                      disabled={!selectedProducts[product.id]?.quantity}
                    >
                      <FaMinus size={14} />
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={selectedProducts[product.id]?.quantity || ""}
                      onChange={(e) => {
                        const value = parseInt(e.target.value) || 0;
                        setSelectedProducts(prev => ({
                          ...prev,
                          [product.id]: {
                            ...prev[product.id],
                            quantity: Math.max(0, value)
                          }
                        }));
                      }}
                      className="w-16 text-center py-1 focus:outline-none text-[#1F3A5F]"
                      placeholder="0"
                    />
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="px-3 py-1 text-[#1F3A5F] hover:bg-[#1F3A5F]/10 border-l"
                    >
                      <FaPlus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      if (selectedProducts[product.id]?.quantity > 0) {
                        setSelectedProducts(prev => ({
                          ...prev,
                          [product.id]: {
                            ...prev[product.id],
                            added: true
                          }
                        }));
                      }
                    }}
                    disabled={!selectedProducts[product.id]?.quantity}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      selectedProducts[product.id]?.added
                        ? 'bg-orange-500 text-white'
                        : selectedProducts[product.id]?.quantity
                        ? 'bg-[#1F3A5F] text-white hover:bg-[#1F3A5F]/80'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {selectedProducts[product.id]?.added ? 'Added' : 'Add to Enquiry'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Enquiry Button */}
      {Object.values(selectedProducts).some(p => p?.quantity > 0) && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => setShowEnquiryForm(true)}
            className="bg-[#1F3A5F] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#1F3A5F]/80 transition-colors flex items-center space-x-2"
          >
            <FaShoppingCart />
            <span>Submit Enquiry</span>
          </button>
        </div>
      )}

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1F3A5F]">Submit Enquiry</h2>
              <button
                onClick={() => setShowEnquiryForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Name*</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1F3A5F]"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Phone*</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1F3A5F]"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Email*</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1F3A5F]"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1F3A5F]"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Selected Products</label>
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">PRODUCT</th>
                        <th className="px-3 py-2 text-right text-xs font-medium text-gray-500">QUANTITY</th>
                        <th className="px-3 py-2 w-8"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {Object.entries(selectedProducts)
                        .filter(([_, value]) => value.quantity > 0 && value.added)
                        .map(([id, value]) => (
                          <tr key={id} className="text-sm hover:bg-gray-50">
                            <td className="px-3 py-2 text-gray-700 font-medium">{productsData.find(p => p.id === id).name}</td>
                            <td className="px-3 py-2 text-right text-gray-700 font-medium">{value.quantity}</td>
                            <td className="px-3 py-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedProducts(prev => {
                                    const newState = { ...prev };
                                    delete newState[id];
                                    return newState;
                                  });
                                }}
                                className="text-red-500 hover:text-red-700"
                              >
                                ✕
                              </button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Additional Message</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1F3A5F]"
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Any specific requirements or questions..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEnquiryForm(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#1F3A5F] text-white rounded-md hover:bg-[#1F3A5F]/80 text-sm font-medium"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;