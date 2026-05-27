import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import TrendingProducts from "./components/home/TrendingProducts";
import FeaturedCollection from "./components/home/FeaturedCollection";
import EditorialBanner from "./components/home/EditorialBanner";
import NewsLetter from "./components/home/Newsletter";
import Account from "./pages/Account";

//array object for the FeaturedCollection
const collections = [
  {
    id: 1,
    title: "new arrivals",
    subtitle:
      "timeless silhouettes crafted with refined structure and modern elegance.",
    image:
      "https://plus.unsplash.com/premium_photo-1760466051070-bb7ba235fbc9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "collection",
  },

  {
    id: 2,
    title: "evening edit",
    subtitle:
      "elevated essentials designed for understated sophistication after dark.",
    image:
      "https://plus.unsplash.com/premium_photo-1726844813736-e1af819407e1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "editorial",
  },

  {
    id: 3,
    title: "minimal essentials",
    subtitle:
      "soft tailoring and contemporary staples for effortless everyday dressing.",
    image:
      "https://plus.unsplash.com/premium_photo-1763556134867-292e288c753b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "wardrobe",
  },
];

//array object for the TrendingProducts
const trendingProducts = [
  {
    id: 1,
    name: "structured blazer",
    price: "₹3,999",
    image:
      "https://plus.unsplash.com/premium_photo-1740459879773-100197327657?q=80&w=870&auto=format&fit=crop",
    badge: "trending",
  },
  {
    id: 2,
    name: "pink lounge set",
    price: "₹2,799",
    image:
      "https://images.unsplash.com/photo-1779675790914-9c7b90dbaf87?w=1200&auto=format&fit=crop",
    badge: "hot",
  },
  {
    id: 3,
    name: "ribbed knit co-ord set",
    price: "₹2,199",
    image:
      "https://images.unsplash.com/photo-1726758149977-d73a19e34298?q=80&w=387&auto=format&fit=crop",
    badge: "bestseller",
  },
  {
    id: 4,
    name: "soft blush summer shirt",
    price: "₹1,499",
    image:
      "https://plus.unsplash.com/premium_photo-1676550906503-396d6c2ace5b?q=80&w=387&auto=format&fit=crop",
    badge: "new",
  },
];

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f1e0]">
      <Navbar />

      <Routes>
        {/* Newsletter page */}
        <Route path="/newsletter" element={<NewsLetter />} />
      </Routes>

      <>
        {/* all the pages */}
        <Hero />
        <FeaturedCollection collections={collections} />
        <TrendingProducts products={trendingProducts} />
        <EditorialBanner />
        <Routes>
          <Route path="/account" element={<Account />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
};

export default App;
