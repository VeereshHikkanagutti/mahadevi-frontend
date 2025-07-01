import React from 'react';
import img1 from '../assets/buildfeature.jpg';
import { productsData } from './Products';
import { Link } from 'react-router-dom';
import delivery from '../assets/delivery.svg';
import trust from '../assets/trust.svg';
import quality from '../assets/quality.svg';


function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-screen h-screen overflow-hidden">
        <img
          src={img1}
          alt="industry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Your Reliable Partner in Sugar Industry Material Supply
          </h1>
          <h2
            className="text-2xl text-yellow-200 font-normal mb-2"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              margin: 0,
              textAlign: 'center'
            }}
          >
            Building strong industrial connections with trusted materials and timely delivery.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 font-medium">
            <div className="text-lg md:text-xl text-yellow-300 font-semibold text-center">
              5+ Years of Excellence
            </div>
            <div className="text-lg md:text-xl text-green-200 font-semibold text-center">
              100+ Projects Supplied
            </div>
            <div className="text-lg md:text-xl text-blue-200 font-semibold text-center">
              Serving 10+ Cities
            </div>
            <div className="text-lg md:text-xl text-pink-200 font-semibold text-center">
              Quality Guaranteed
            </div>
          </div>
          <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700">
            Let's Connect
          </button>
        </div>
      </div>

      {/* Our Products */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">
          Our Products
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Discover our comprehensive range of industrial products, engineered for reliability and performance in the sugar and manufacturing sectors. From precision bearings to robust valves and gears, we supply the essential components that keep your operations running smoothly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
          {productsData.map((prod, idx) => (
            <div
              key={prod.id}
              className="rounded-lg bg-[#f5f6fa] shadow hover:shadow-2xl transition-all duration-300 flex items-center justify-center h-24 cursor-default animate-fade-in-up-scale transform hover:scale-105"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <span className="text-xl font-semibold text-black">{prod.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Link
            to="/products"
            className="inline-block bg-[#F08000] hover:bg-[#c96a00] text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-200 animate-bounce flex items-center"
          >
            View All Products & Solutions
            <span className="ml-2 text-xl">→</span>
          </Link>
        </div>

        {/* Animation styles */}
        <style>
          {`
            @keyframes fade-in-up {
              from { opacity: 0; transform: translateY(30px);}
              to { opacity: 1; transform: translateY(0);}
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.7s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}
        </style>
      </section>

      {/* Why Choose Us */}
      <section className="py-0 px-0 w-full">
        <div className="relative w-full flex flex-col md:flex-row">
          {/* Left: Section Title & Description */}
          <div
            className="flex flex-col justify-center px-6 py-12 md:py-20 bg-[#F08000] relative z-10 md:basis-[35%] md:max-w-[35%] w-full"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold mb-2 text-white">
              Why Choose Us as Your Business Partner?
            </h2>
            <p className="text-lg text-orange-100 mb-2">
              Trusted by industry leaders for quality, reliability, and service.
            </p>
            <p className="text-orange-100">
              With a strong supply chain network and over 5 years of industry expertise, we ensure timely delivery and trusted quality every step of the way.
            </p>
            <Link
              to="/about-us"
              className="mt-6 inline-block bg-white hover:bg-[#c96a00] text-[#F08000] px-6 py-2 rounded-full font-semibold shadow transition"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right: Features with images/icons */}
          <div
            className="grid grid-cols-1 gap-4 px-6 py-12 md:py-20 relative z-10 md:basis-[65%] md:max-w-[65%] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80')"
            }}
            data-aos="fade-left"
          >
            {[
              {
                img: delivery,
                title: '99% On‑Time Delivery',
                desc: 'Timely shipments across all locations, every time.',
              },
              {
                img: trust,
                title: 'Trustworthy Service',
                desc: 'We build lasting relationships with our clients and partners.',
              },
              {
                img: quality,
                title: 'Quality Assurance',
                desc: 'We source only premium-grade industry materials.',
              },
            ].map((feat, i) => (
              <div
                key={feat.title}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="flex flex-col items-center bg-[#f8fafc] p-4 rounded-lg shadow hover:shadow-xl transition hover-rise border-l-4 border-[#F08000] min-h-[120px] backdrop-blur-sm bg-opacity-90"
              >
                <img src={feat.img} alt={feat.title} className="w-12 h-12 mb-2" />
                <h3 className="text-xl font-semibold text-center text-[#F08000]">{feat.title}</h3>
                <p className="text-gray-700 text-center">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
