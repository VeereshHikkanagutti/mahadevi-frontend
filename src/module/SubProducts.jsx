import { useParams, Link } from "react-router-dom";
import { productsData } from "./Products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

function SubProducts() {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === Number(productId));
  const [enquireSubProduct, setEnquireSubProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (!product) return <div className="text-white p-8">Product not found.</div>;

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Overlay for background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 z-0" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 py-12">
        <Link to="/products" className="text-yellow-400 hover:underline mb-6 inline-block">
          ← Back to Products
        </Link>
        <h2 className="text-3xl font-bold text-yellow-200 mb-6">{product.name} - Sub Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {product.subProducts.map((sub) => (
            <div key={sub.id} className="relative w-full">
              <ProductCard product={sub} />
              <button
                className="absolute bottom-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow transition"
                onClick={() => {
                  setEnquireSubProduct(sub);
                  setSubmitted(false);
                }}
              >
                Enquire
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sliding Enquiry Drawer */}
      {enquireSubProduct && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setEnquireSubProduct(null)}
          />
          {/* Drawer */}
          <div className="ml-auto w-full max-w-md bg-white shadow-xl h-full p-6 animate-slide-in-right relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setEnquireSubProduct(null)}
              aria-label="Close"
            >
              &times;
            </button>
            {submitted ? (
              <div className="text-[#0F0E47] font-semibold text-center mt-16">
                Thank you! Your enquiry has been sent.
              </div>
            ) : (
              <form
                className="mt-8"
                onSubmit={e => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Enquire about {enquireSubProduct.name}
                </h3>
                <div className="mb-3">
                  <label className="block text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder={`Your enquiry about ${enquireSubProduct.name}...`}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded transition"
                >
                  Send Enquiry
                </button>
              </form>
            )}
            {!submitted && (
              <div className="mt-6 text-center">
                <span className="text-gray-600 text-sm">Need a formal quotation?</span>
                <Link
                  to={`/request-quote?product=${encodeURIComponent(enquireSubProduct.name)}`}
                  className="ml-2 text-blue-700 font-semibold underline hover:text-blue-900"
                  onClick={() => setEnquireSubProduct(null)}
                >
                  Request a Quotation
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Slide-in animation */}
      <style>
        {`
          .animate-slide-in-right {
            animation: slide-in-right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          @keyframes slide-in-right {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}

export default SubProducts;