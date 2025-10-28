import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useNavigate, useLocation } from 'react-router-dom';
import valveProducts from '../data/productList/valves';
import bearingProducts from '../data/productList/bearings';
import gearProducts from '../data/productList/gears';
import fastenerProducts from '../data/productList/fasteners';
import gasketProducts from '../data/productList/gaskets';
import flangeProducts from '../data/productList/flanges';
import instrumentProducts from '../data/productList/instruments';
import liftingProducts from '../data/productList/lifting';
import pipeProducts from '../data/productList/pipes';
import safetyProducts from '../data/productList/safety';
import toolProducts from '../data/productList/tools';
import productCategories from '../data/productCategories';

function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  // Set initial category based on URL search params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    if (category && productCategories.some(cat => cat.id === category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
  }, [location.search]);

  // Get filtered products based on category and search
  const getFilteredProducts = () => {
    let products;
    
    if (selectedCategory) {
      switch(selectedCategory) {
        case 'bearings':
          products = bearingProducts;
          break;
        case 'valves':
          products = valveProducts;
          break;
        case 'gears':
          products = gearProducts;
          break;
        case 'fasteners':
          products = fastenerProducts;
          break;
        case 'gaskets':
          products = gasketProducts;
          break;
        case 'flanges':
          products = flangeProducts;
          break;
        case 'instruments':
          products = instrumentProducts;
          break;
        case 'lifting':
          products = liftingProducts;
          break;
        case 'pipes':
          products = pipeProducts;
          break;
        case 'safety':
          products = safetyProducts;
          break;
        case 'tools':
          products = toolProducts;
          break;
        default:
          products = [];
      }
    } else {
      products = [
        ...bearingProducts,
        ...valveProducts,
        ...gearProducts,
        ...fastenerProducts,
        ...gasketProducts,
        ...flangeProducts,
        ...instrumentProducts,
        ...liftingProducts,
        ...pipeProducts,
        ...safetyProducts,
        ...toolProducts
      ];
    }

    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleCategoryChange = (categoryId) => {
    if (categoryId === selectedCategory) {
      setSelectedCategory(null);
      navigate('/products');
    } else {
      setSelectedCategory(categoryId);
      navigate(`/products?category=${categoryId}`);
    }
  };

  const handleQuantityChange = (productId, change) => {
    setSelectedProducts(prev => {
      const currentQuantity = prev[productId]?.quantity || 0;
      const newQuantity = Math.max(0, currentQuantity + change);
      
      if (newQuantity === 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [productId]: {
          quantity: newQuantity
        }
      };
    });
  };

  const handleSubmitEnquiry = async (e) => {
    e.preventDefault();

   const productsList = Object.entries(selectedProducts)
    .map(([id, data]) => {
      const product = [...bearingProducts, ...valveProducts, ...gearProducts].find(p => p.id === id);
      return `<div style="margin-bottom:6px;">${product.name} <strong>(Qty: ${data.quantity})</strong></div>`;
    })
    .join("");


    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      products: productsList
    };

    try {
      await emailjs.send(
        'service_tvs2kve',
        'template_3i1utnc',
        templateParams,
        'n92rcp2adr_GDZLRu'
      );

      setFormSubmitted(true);
      setShowEnquiryForm(false);
      setSelectedProducts({});
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });

      alert('Your enquiry has been submitted successfully! We will contact you soon.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your enquiry. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Floating Enquiry Button */}
      {Object.keys(selectedProducts).length > 0 && (
        <button
          onClick={() => setShowEnquiryForm(true)}
          className="fixed bottom-8 right-8 bg-[#F08000] text-white p-4 rounded-full shadow-lg hover:bg-[#E67600] transition-all transform hover:scale-105 z-50 flex items-center gap-2 group"
          style={{
            boxShadow: '0 4px 20px rgba(240, 128, 0, 0.3)'
          }}
        >
          <div className="relative">
            <FaShoppingCart size={24} className="group-hover:animate-bounce" />
            <span className="absolute -top-2 -right-2 bg-white text-[#F08000] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {Object.keys(selectedProducts).length}
            </span>
          </div>
          <span className="font-medium">Submit Enquiry</span>
        </button>
      )}

      {/* Header Section */}
      <div className="bg-[#1F3A5F] text-white py-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white text-center">
            Our Premium Industrial Solutions
          </h1>
          <p className="text-center text-blue-100 mt-4 text-lg">
            Discover our comprehensive range of high-quality industrial products
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/10 text-white placeholder-blue-200 backdrop-blur-sm border border-white/20"
              />
              <FaSearch className="absolute right-3 top-3.5 text-blue-200" />
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedCategory
                  ? 'bg-white text-blue-900'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              All Products
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  category.id === selectedCategory
                    ? 'bg-white text-blue-900'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getFilteredProducts().map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#1F3A5F] mb-2">{product.name}</h3>
                <div className="mt-4 space-x-2">
                  {selectedProducts[product.id] ? (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="p-2 text-[#1F3A5F] hover:bg-gray-100 rounded"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="text-[#1F3A5F] font-medium">
                        {selectedProducts[product.id].quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="p-2 text-[#1F3A5F] hover:bg-gray-100 rounded"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="bg-[#1F3A5F] text-white px-4 py-2 rounded-lg hover:bg-[#152C4A] transition-colors w-full flex items-center justify-center space-x-2"
                    >
                      <FaShoppingCart size={16} />
                      <span>Add to Enquiry</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#1F3A5F]">Product Enquiry</h2>
                <button
                  onClick={() => setShowEnquiryForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <form ref={formRef} onSubmit={handleSubmitEnquiry}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-700 mb-2">Selected Products:</h3>
                    <ul className="space-y-2">
                      {Object.entries(selectedProducts).map(([id, data]) => {
                        const product = [...bearingProducts, ...valveProducts, ...gearProducts].find(p => p.id === id);
                        return (
                          <li key={id} className="flex justify-between items-center text-sm text-gray-600">
                            <span>{product.name}</span>
                            <span className="font-medium">Qty: {data.quantity}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#1F3A5F] text-white px-6 py-3 rounded-lg hover:bg-[#1F3A5F] transition-colors font-medium"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {formSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Enquiry Submitted Successfully!</h2>
            <p className="text-gray-600">Thank you for your interest. We will get back to you soon.</p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-4 w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;