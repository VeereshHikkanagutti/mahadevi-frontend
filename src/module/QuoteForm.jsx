import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import quote from "../assets/quote.svg";

function QuoteForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const prefillProduct = params.get("product") || "";

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: { product: prefillProduct }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    emailjs
      .send("service_tvs2kve", "template_8ftjuot", data, "n92rcp2adr_GDZLRu")
      .then(() => {
        setIsLoading(false);
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch(() => {
        alert("Something went wrong.");
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 relative overflow-hidden">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none">
          <ellipse cx="400" cy="100" rx="500" ry="200" fill="#F0800022" />
          <ellipse cx="700" cy="600" rx="300" ry="100" fill="#2563eb11" />
        </svg>
      </div>
      {/* Blurred colored backgrounds for left and right */}
      <div className="absolute left-0 top-0 h-full w-1/2 z-0">
        <div className="h-full w-full bg-white"></div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2 z-0">
        <div className="h-full w-full bg-white"></div>
      </div>
      <div className="max-w-6xl mx-auto rounded-xl shadow-2xl shadow-[#F0800033] p-8 flex flex-col md:flex-row gap-8 relative animate-fade-in-up overflow-hidden">
        {/* Colored blur overlays inside the card */}
        <div className="absolute left-0 top-0 h-full w-1/2 z-0">
          <div className="h-full w-full bg-gradient-to-br from-[#F08000]/20 to-transparent backdrop-blur-sm"></div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 z-0">
          <div className="h-full w-full bg-gradient-to-tl from-blue-200/20 to-transparent backdrop-blur-sm"></div>
        </div>
        {/* Card content (set z-10 to keep above overlays) */}
        <div className="md:w-1/2 flex flex-col items-center justify-center relative z-10">
          <img
            src= {quote}
            alt="Request a Quote"
            className="w-40 mb-4 animate-bounce"
          />
          <div className="mb-4 text-center">
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">
              100+ Businesses Served
            </span>
            <p className="text-gray-700 text-sm">
              Our team responds to all quote requests within 24 hours.<br />
              For urgent queries, call <a href="tel:+919739461453 " className="text-[#F08000] font-semibold">+91 9739461453</a>.
            </p>
          </div>
          <ul className="mb-6 text-gray-600 text-sm space-y-1 text-left">
            <li>✔️ Competitive pricing for bulk orders</li>
            <li>✔️ Fast, reliable delivery</li>
            <li>✔️ Custom solutions for your needs</li>
            <li>✔️ Expert technical support</li>
          </ul>
        </div>
        <div className="md:w-1/2 relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-blue-800">Request a Quotation</h2>
          <p className="mb-6 text-gray-600">
            Please fill out the form below and our team will get back to you with a detailed quotation.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Your Name *</label>
                <input {...register("name")} placeholder="Full Name" className="w-full p-2 border rounded text-gray-900 bg-white" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email *</label>
                <input {...register("email")} type="email" placeholder="Email" className="w-full p-2 border rounded text-gray-900 bg-white" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone</label>
                <input {...register("phone")} type="tel" placeholder="Phone Number" className="w-full p-2 border rounded text-gray-900 bg-white" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Company</label>
                <input {...register("company")} placeholder="Company Name" className="w-full p-2 border rounded text-gray-900 bg-white" />
              </div>
            </div>
            {/* Product Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Product Name *</label>
                <input {...register("product")} placeholder="Product Name" className="w-full p-2 border rounded text-gray-900 bg-white" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Quantity</label>
                <input {...register("quantity")} type="number" min="1" placeholder="Quantity" className="w-full p-2 border rounded text-gray-900 bg-white" />
              </div>
              <div>
                <label className="block text-gray-00 mb-1">Unit</label>
                <select {...register("unit")} className="w-full p-2 border rounded text-gray-900 bg-white">
                  <option value="">Select Unit</option>
                  <option value="pieces">Pieces</option>
                  <option value="kg">Kg</option>
                  <option value="tons">Tons</option>
                  <option value="meters">Meters</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Delivery Location</label>
                <input {...register("location")} placeholder="City, State" className="w-full p-2 border rounded text-gray-900 bg-white" />
              </div>
            </div>
            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-1">Message / Requirements *</label>
              <textarea {...register("message")} placeholder="Describe your requirements..." className="w-full p-2 border rounded text-gray-900 bg-white" required />
            </div>
            {/* Consent */}
            <div className="flex items-center">
              <input type="checkbox" {...register("consent")} required className="mr-2" />
              <span className="text-gray-600 text-sm">I agree to be contacted regarding my enquiry.</span>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold w-full flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loader mr-2"></span>
              ) : (
                "Send Request"
              )}
            </button>
            {submitted && (
              <div className="text-green-600 text-center mt-4 animate-fade-in">
                ✅ Your request has been sent!
              </div>
            )}
          </form>
        </div>
      </div>
      {/* Optional: FAQ or Help Section */}
      <div className="max-w-3xl mx-auto mt-8 text-center text-gray-500 text-sm">
        <p>Need help? <a href="/contact" className="text-[#F08000] underline">Contact our support team</a> or check our <a href="/faq" className="text-[#F08000] underline">FAQ</a>.</p>
      </div>
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}
      </style>
    </div>
  );
}

export default QuoteForm;
