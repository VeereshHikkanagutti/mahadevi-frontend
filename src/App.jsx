import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./module/Home";
import QuoteForm from "./module/QuoteForm";
import Contact from "./module/Contact";
import AboutUs from "./module/AboutUs";
import Products from "./module/Products";
import SubProducts from "./module/SubProducts";
import OurBrands from "./module/OurBrands";
import SuccessStories from "./module/SuccessStories";
import SocialContacts from "./components/SocialContacts";

function App() {
  return (
    <Router>
      <Navbar />
      <SocialContacts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SubProducts />} />
        <Route path="/request-quote" element={<QuoteForm />} />
        <Route path="/our-brands" element={<OurBrands />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
